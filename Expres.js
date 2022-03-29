var express = require('express');

var app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
  res.sendFile(__dirname + "/index.html");
})

app.get('/contact',function(req,res){
  res.sendFile(__dirname + '/404.html');
})

app.get('/profile/:id',function(req,res){
  res.render('profile',{id:req.params.id});
})
app.listen(8080);
