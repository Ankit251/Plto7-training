
var fs = require('fs');


fs.readFileSync('read.txt','utf-8');

fs.readFile('read.txt','utf-8',function(err,data){
  fs.writeFile('write.txt',data,function(err,data){});
});

fs.mkdir('ankit',function(){
  fs.writeFileSync('./ankit/read.txt','this should work');
})

fs.unlink('./ankit/read.txt',function(){});

fs.rmdirSync('ankit');
