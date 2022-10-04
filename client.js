var udp = require('dgram');
var buffer = require('buffer');

// creating a client socket
var client = udp.createSocket('udp4');

// buffer msg
client.on('message', function(msg, info) {
  console.log('Data received from server: ' + msg.toString());
  console.log('Received %d bytes from %s:%d\n', msg.length, info.address, info.port);
});


var data1 = Buffer.from('hello');
var data2 = Buffer.from('world');

//sending multiple msg
client.send([data1, data2], 2222, 'localhost', function(error) {
  if (error) {
	client.close();
  } else {
	console.log('Data sent !!!');
  }
});



const {GlobalKeyboardListener} = require("node-global-key-listener");
const v = new GlobalKeyboardListener();

//Log every key that's pressed.
v.addListener(function (e, down) {
    console.log( 
        `${e.name} ${e.state == "DOWN" ? "DOWN" : "UP  "} [${e.rawKey._nameRaw}]`
    );
});



