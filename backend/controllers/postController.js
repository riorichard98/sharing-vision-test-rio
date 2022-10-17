const { errorVariables } = require("../helpers/errorVars");
const { postValidator } = require("../helpers/postValidator");
const { Post } = require("../models/post");

class PostController{
    static async createPost(req,res,next){
        try {
            postValidator(req.body)
            await Post.createPost(req.body)
            res.status(201).json({message:'Success creating new post'})
        } catch (error) {
            next(error)
        }
    }

    static async getAllPost(req,res,next){
        try {
            const {offset,limit} = req.params
            let status = req.query.status ? req.query.status : false
            if(status != 'publish' && status != 'draft' && status != 'thrash') status = false
            const response = await Post.readAllPosts(limit,offset,status)
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }

    static async getPostDetail(req,res,next){
        try {
            const {id} = req.params
            const response = await Post.readPostDetail(id)
            if(!response) throw(errorVariables(404,'post not found'))
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }

    static async updatePost(req,res,next){
        try {
            const {id} = req.params
            postValidator(req.body)
            const response = await Post.updatePost(req.body,id)
            if(!response.rowCount) throw(errorVariables(404,'post not found'))
            res.status(201).json({message:'Success updating a post'})
        } catch (error) {
            next(error)
        }
    }

    static async deletePost(req,res,next){
        try {
            const {id} = req.params
            const response = await Post.deletePost(id)
            if(!response.rowCount) throw(errorVariables(404,'post not found'))
            res.status(201).json({message:'Success deleting a post'})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = {
    PostController
}