const express = require('express')
const app = express()

app.get('/', middleware, isLoggedIn, function (req, res) {
  res.send(res.isLoggedIn)
})

app.get('/date/', function (req, res) {
    res.send(new Date())
})

app.get('/car/:brand', (req,res) => {
    res.send(`${req.params.brand}`)
})

function middleware(req,res,next){
    console.log("middleware...");
    next()
}

function isLoggedIn(req,res,next){
    console.log("")
    res.isLoggedIn = true;
    res.setHeader("Pepsi","Max")
    next()
}

app.listen(3000)