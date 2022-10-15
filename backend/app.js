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

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})