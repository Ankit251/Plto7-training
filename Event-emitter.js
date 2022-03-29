var events = require('events');
const eventemitter = new events.EventEmitter();







// eventemitter example


eventemitter.on('speak', function(){
  console.log('speaking');
});

eventemitter.emit('speak');


// EventEmitter with parameter function


eventemitter.on('speak',function(msg){
  console.log(msg);
});

eventemitter.emit('speak','this is working');
