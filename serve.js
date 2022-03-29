var http = require('http');

var fs = require('fs');

// var readStream = fs.createReadStream(__dirname + '/index.html');
// var writeStream = fs.createWriteStream(__dirname+'/write.txt');




var server = http.createServer(function(req,res){
  console.log(req.url);
  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200,{'content-type':'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  }else{
    res.writeHead(404,{'content-type':'text/html'});
    fs.createReadStream(__dirname+'/404.html').pipe(res);
  }


});

server.listen(8080);






// readStream.on('data',function(chunk){
//   console.log("new buffer found");
// writeStream.write(chunk);
//   console.log(chunk);
// });

// var server = http.createServer(function(req,res){
//   console.log(req.url);
//   res.end("It is Working");
// });
//
// server.listen(8080);
