var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// res.redirect('/users/form');

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ankitk2510",
  database:"Anki"
});

con.connect(function(err) {
  if(!err){
    console.log("connected");
  }else{
    console.log("not connected");
  }
});

app.set('view engine','ejs');

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
})

app.get('/profile',function(req,res){
  res.render('profile');
})

app.get('/signup',function(req,res){
  res.render('signup');
})


app.post('/signup' ,urlencodedParser, function(req,res){
  console.log(req.body.uname);


    var name = req.body.uname;
  var adr = req.body.psw;
  var sql = 'SELECT * FROM users WHERE name = ? AND password = ?';
  con.query(sql, [name, adr], function (err, result) {
    var numRows = result.length;
    if (numRows>0)
    {
      console.log("Data found");
      res.redirect('/main');
    } else{
      console.log(numRows);
    }

  });
  res.render('signup');
})

app.get('/registeration',function(req,res){
  res.render('registeration');
})


app.get('/main',function(req,res){
  res.render('main');
})

app.post('/main', urlencodedParser, function (req, res) {
  var val = req.body.dat;
  var res;
  console.log(val);
  var sql = 'SELECT * FROM users WHERE name = ? ';
  con.query(sql,[val],function(err,result){

    console.log(result);

   res.render('dataa',{data:result});
 })
})

app.post('/dataa', urlencodedParser, function (req, res) {
  var val = 'Ankit';
  var res;
  console.log(val);
  var sql = 'Delete FROM users WHERE name = ? ';
  con.query(sql,[val],function(err,result){

    console.log("Number of records deleted: " + result.affectedRows);

   res.render('main');
 })
})

// app.post('/signup' ,urlencodedParser, function(req,res){
//     console.log(res.body);
//     res.render('/signup');
// });

app.post('/registeration' ,urlencodedParser, function(req,res){
  var uname = req.body.email;
  var upassword = req.body.psw;
  var value = [uname,upassword];
  var sql = "insert into users (name,password) values (?)";
  con.query(sql , [value], function(err){
    if(!err){
      console.log("data inserted");

    }else{
      console.log(err);
    }
  });

  res.render('registeration');
});




app.post('/profile' ,urlencodedParser, function(req,res){
  var uname = req.body.name;
  var upassword = req.body.password;
  var value = [uname,upassword]
  var sql = "insert into users (name,password) values (?)";
  con.query(sql , [value], function(err){
    if(!err){
      console.log("data inserted");
    }else{
      console.log(err);
    }
  });

  res.render('profile');
});

app.listen(8000);
