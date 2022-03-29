
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/index.html');
var writeStream = fs.createWriteStream(__dirname+'/write.txt');

readStream.on('data',function(chunk){
  console.log("new buffer found");
// writeStream.write(chunk);
  console.log(chunk);
});

//using pipe

readStream.pipe(writeStream);
