const express = require('express')
const app = express()
const fs = require('fs')
const bodyParser = require('body-parser')

const server = app.listen(3000,function(){
    let port = server.address().port
    console.log('You have a tiny server at http://localhost:%s',port)
})

app.use(express.static('lib'))
app.use(express.static('images'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extend:true}))

app.get('/',function(req,res){
    res.sendfile(__dirname + '/index.html')
})

//get请求
app.get('/personal',function(req,res){
    fs.readFile('./data.json','utf8',(err,data)=>{
        res.send(data)
    })
})

//post请求
app.post('/post_data',function(req,res){
    console.log(req.body)
})



