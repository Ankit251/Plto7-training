var express = require('express');
// var bodyParser = require('body-parser');
var bodyParser = require('body-parser');
var app = express();

// var urlencodedbodyParser = bodyParser.urlencoded({extended:false});
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine','ejs');

app.get('/',function(req,res){
  res.sendFile(__dirname + "/index.html");
})

app.get('/contact',function(req,res){
  res.render('contact',{qs:req.query});
})

app.post('/contact', urlencodedParser, function (req, res) {
  console.log(req.body);
  res.render('contact-success',{data:req.body});
})

app.get('/profile/:id',function(req,res){
  res.render('profile',{id:req.params.id});
})
app.listen(8080);
