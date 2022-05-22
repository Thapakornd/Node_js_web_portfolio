const express = require('express'); //install express: Terminal > npm install express --save
const app = express();
const port = 3000;

//Creating App --> Pointer(=>{Object})
app.get("/",(req,res) => {
    res.send("Hello World");
})

//Open Server
app.listen(port,() => {
    console.log("Server is listen on port:",port);
})