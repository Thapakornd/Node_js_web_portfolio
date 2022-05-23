//before install nodejs : npm i

const express = require('express'); //express npm i express   
const app = express()
const port = 3000

//use view ejs : npm i ejs
app.set('view engine','ejs')
//Give app to use function
//app.use(logger)

//Give app to use public folder
//If use static public in views can't render
//in public folder you can use much u want application
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

//link to index page
app.get('/',(req,res) => {
    console.log('Here')
    res.render("index", {text: "World"})
})

//link router to user.js
const userRouter = require('./routes/users')
app.use('/users', userRouter)

function logger(req,res,next) {
    console.log(req.originalUrl)
    next()
}

//Open Server  
app.listen(port)