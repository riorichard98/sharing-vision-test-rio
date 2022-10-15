const { Db } = require("../config/connection");
const { currentTimeGetter } = require("../helpers/currentTimeGetter");

class Post{
    static async createPost(data){
        try {
            const queryStr = `INSERT INTO posts ("Title","Content","Category","Created_date","Updated_date","Status")
            VALUES('${data.title}','${data.content}','${data.category}','${currentTimeGetter()}',
            '${currentTimeGetter()}','${data.status}')` 
            const response = await Db.query(queryStr)
            console.log(response);
            return response
        } catch (error) {
            throw(error)
        }
    }

    static async readAllPosts(limit,offset){
        try {
            const queryStr = `SELECT * FROM posts ORDER BY id LIMIT ${limit} OFFSET ${offset}`
            const response = await Db.query(queryStr)
            return response
        } catch (error) {
            throw(error)
        }
    }

    static async readPostDetail(id){
        try {
            const queryStr = `SELECT * FROM posts WHERE id = ${id}`
            const response = await Db.query(queryStr)
            return response[0]
        } catch (error) {
            throw(error)
        }
    }

    static async updatePost(data,id){
        try {
            const queryStr = `UPDATE posts 
            SET Title='${data.title}',Content='${data.content}',Category='${data.category}',Status='${data.status}',
            Updated_date='${currentTimeGetter()}' WHERE id = ${id}`
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