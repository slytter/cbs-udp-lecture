var udp = require('dgram');

// creating a client socket
var clientSocket = udp.createSocket('udp4');

// On receive data from server
clientSocket.on('message', function(msg, info) {
  // console.log('Data received from server: ' + msg.toString());
});

var data1 = Buffer.from('hello');
var data2 = Buffer.from('world');

// sending messages
clientSocket.send([data1, data2], 2222, 'localhost', function(error) {
  if (error) {
	  clientSocket.close();
  } else {
	  console.log('Data sent');
  }
});


//// Kode til opgave 1

// const {GlobalKeyboardListener} = require("node-global-key-listener");
// const v = new GlobalKeyboardListener();

// //Log every key that's pressed.
// v.addListener(function (e, down) {
//     console.log( 
//         `${e.name} ${e.state == "DOWN" ? "DOWN" : "UP  "} [${e.rawKey._nameRaw}]`
//     );
// });



