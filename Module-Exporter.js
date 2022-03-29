// var time = 0

// var t = setInterval(function(){
//   time+=2
//   console.log(time + " sec paased")
//   if(time>8){
//     clearInterval(t)
//   }
// },2000)
var hy = function(){
  console.log('Hy');
}

var pi = 3.45;

var add = function(a,b){
  return `sum of 2 number is ${a+b}`;
}
module.exports = {
  hy:hy,
  pi:pi,
  add:add
};
