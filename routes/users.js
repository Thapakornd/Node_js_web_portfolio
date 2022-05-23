const express = require('express')
const router = express.Router()

router.get("/", (req,res) => {
    res.send("User List")
})

router.post('/',(req,res) => {
    res.send('Create user')
})

router
    .route("/:id")
    .get((req,res) => {
    res.send(`Get your ID: ${req.params.id}`)
    })
    .put((req,res) => {
    res.send(`Update your ID: ${req.params.id}`)
})

router.delete('/:id',(req,res) => {
    res.send(`Delete your ID: ${req.params.id}`)
})

module.exports = router