//before install nodejs : npm i

const express = require('express'); //express npm i express   
const app = express()
const port = 3000

//use view ejs : npm i ejs
app.set('view engine','ejs')

//link to index page
app.get('/',(req,res) => {
    console.log('Here')
    res.render("index", {text: "World"})
})

//link router to user.js
const userRouter = require('./routes/users')

app.use('/users', userRouter)

//Open Server  
app.listen(port)