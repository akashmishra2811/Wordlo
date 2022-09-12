const express = require('express')
const app= express();
const port =  process.env.PORT || 5000
//app.use('/' ,express.static('/'));
app.use(express.static(__dirname + '/'));
app.use('/style.css',function(req,res,next){
  console.log(req.url)
  next();
})
app.get('/wordlo',function(req, res){
    res.sendFile(__dirname + '/index.html');
})
app.listen(port)
