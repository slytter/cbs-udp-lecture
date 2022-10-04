var udp = require('dgram');

// creating a udp server
var socket = udp.createSocket('udp4');

// emits when any error occurs
socket.on('error', function(error){
	console.error('Error: ' + error);
	socket.close();
});

// emits on new datagram msg
socket.on('message', function(msg, info){
	console.log('Data received from client : ' + msg.toString());
	console.log('Received %d bytes from %s:%d\n', msg.length, info.address, info.port);

	// sending msg
	socket.send(msg, info.port, 'localhost' ,function(error) {
		if(error) {
			client.close();
		} else {
			console.log('Data sent back to client');
		}
	});
});


// emits when socket is ready and listening for datagram msgs
socket.on('listening', function(){
  var address = socket.address();
  var port = address.port;
  var family = address.family;
  var ipaddr = address.address;
  console.log('Server is listening at port' + port);
  console.log('Server ip :' + ipaddr);
  console.log('Server is IP4/IP6 : ' + family);
});


// emits after the socket is closed using socket.close();
socket.on('close', function() {
	console.log('Socket is closed !');
});


// Server can be closed using:
// server.close();




socket.bind(2222);