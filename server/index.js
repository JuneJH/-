const express = require("express");


const app = express();

app.get("/",(req,res)=>{
    res.send("ok")
})


app.listen(8080,()=>{
    console.log("start serve 8080")
})