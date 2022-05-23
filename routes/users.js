const express = require('express')
const router = express.Router()

router.get("/", (req,res) => {
    console.log(req.query.name)
    res.send("User List")
})

router.post('/',(req,res) => {
    const isValid = true
    if (isValid){
        users.push({ firstname: req.body.firstname})
        res.redirect(`/users/$(users.length) - 1`)
    }else{
        console.log("ERROR")
        res.render("users/new",{ firstname: req.body.firstname})
    }
})

router.get('/new',(req,res) => {
    res.render("users/new" , { firstname: "Test"}) 
})

router
    .route("/:id")
    .get((req,res) => {
        console.log(req.user)
        res.send(`Get your ID: ${req.params.id}`)
    })
    .put((req,res) => {
        res.send(`Update your ID: ${req.params.id}`)
    })
    .delete((req,res) => {
        res.send(`Delete your ID: ${req.params.id}`)
    })

const users = [{name: "Kayle"},{ name: "Sally"}]
router.param("id",(req,res,next,id) => {
    console.log(id)
    req.user = users[id]
    next()
})

module.exports = router