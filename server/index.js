const express = require("express");


const app = express();

app.get("/api",(req,res)=>{
    res.json({data:234,msg:"ok"})
})


app.listen(8080,()=>{
    console.log("start serve 8080")
})