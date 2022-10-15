const { errorVariables } = require("../helpers/errorVars");
const { postValidator } = require("../helpers/postValidator");
const { Post } = require("../models/post");

class PostController{
    static async createPost(req,res,next){
        try {
            postValidator(req.body)
            await Post.createPost(req.body)
            res.status(200).json({message:'Success creating new post'})
        } catch (error) {
            console.log(error);
            if(error.type === 'known'){
                res.status(error.code).json({message:error.message})
            }
        }
    }
}

module.exports = {
    PostController
}