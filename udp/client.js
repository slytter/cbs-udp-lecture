var udp = require('dgram');
var buffer = require('buffer');
let Mic = require('node-microphone');
let mic = new Mic();
let micStream = mic.startRecording();

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






// micStream.pipe(() => {});

setTimeout(() => {
    logger.info('stopped recording');
    mic.stopRecording();
}, 3000);

mic.on('info', (info) => {
	console.log(info);
});

mic.on('error', (error) => {
	console.log(error);
});
