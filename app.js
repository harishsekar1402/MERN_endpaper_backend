const express = require('express')
const app = express()

app.use('/',(req,res)=>{
    res.send("working")
})

app.listen(3500)