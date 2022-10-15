require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const { PostController } = require('./controllers/postController')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/article',PostController.createPost)
app.get('/article/:id',PostController.getPostDetail)
app.get('/article/:limit/:offset',PostController.getAllPost)
app.put('/article/:id',PostController.updatePost)
app.delete('/article/:id',PostController.deletePost)

const errorHandler = (error,req,res,next)=>{
    if(error.type === 'known'){
        res.status(error.code).json({
            message:error.message
        })
    }else{
        res.status(500).json({
            message:"internal server error"
        })
    }
}

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})