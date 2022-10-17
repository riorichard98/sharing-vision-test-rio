const { Db } = require("../config/connection");
const { currentTimeGetter } = require("../helpers/currentTimeGetter");

class Post{
    static async createPost(data){
        try {
            const queryStr = `INSERT INTO posts ("Title","Content","Category","Created_date","Updated_date","Status")
            VALUES('${data.title}','${data.content}','${data.category}','${currentTimeGetter()}',
            '${currentTimeGetter()}','${data.status}')` 
            const response = await Db.query(queryStr)
            return response
        } catch (error) {
            throw(error)
        }
    }

    static async readAllPosts(limit,offset,status){
        try {
            const queryStr = `SELECT * FROM posts ${status? 'WHERE "Status" = ' + "'" +status+ "'" : ''} 
            ORDER BY id DESC LIMIT ${limit} OFFSET ${offset}`
            const queryStr2 = `SELECT COUNT(case "Status" when 'publish' then 1 else null end)AS publishCount,
            COUNT(case "Status" when 'draft' then 1 else null end)AS draftCount,
            COUNT(case "Status" when 'thrash' then 1 else null end)AS thrashCount
            FROM posts`
            const [posts,counter] = await Promise.all([Db.query(queryStr),Db.query(queryStr2)])
            return {posts:posts.rows,counter:counter.rows}
        } catch (error) {
            console.log(error);
            throw(error)
        }
    }

    static async readPostDetail(id){
        try {
            const queryStr = `SELECT * FROM posts WHERE id = ${id}`
            const response = await Db.query(queryStr)
            return response.rows[0]
        } catch (error) {
            throw(error)
        }
    }

    static async updatePost(data,id){
        try {
            const queryStr = `UPDATE posts 
            SET "Title"='${data.title}',"Content"='${data.content}',"Category"='${data.category}',
            "Status"='${data.status}',"Updated_date"='${currentTimeGetter()}' WHERE id = ${id}`
            const response = await Db.query(queryStr)
            return response
        } catch (error) {
            throw(error)
        }
    }

    static async deletePost(id){
        try {
            const queryStr = `DELETE FROM posts WHERE id=${id}`
            const response = await Db.query(queryStr)
            return response
        } catch (error) {
            throw(error)
        }
    }
}

module.exports = {
    Post
}