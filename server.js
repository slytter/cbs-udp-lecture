var udp = require('dgram');

// creating a udp server
var serverSocket = udp.createSocket('udp4');


function sendMessageToClient (msg, port) {
	serverSocket.send(msg, port, 'localhost', function(error) {
		if(error) {
			client.close();
		} else {
			console.log('Data sent to client');
		}
	});	
} 


// emits on new datagram msg
serverSocket.on('message', function(msg, info) {
	console.log(info);
	console.log('Data received from client: ' + msg.toString());

	// send the message (msg) back to client:
	// sendMessageToClient(msg, info.port);
});



// emits when socket is ready and listening for datagram msgs
serverSocket.on('listening', function(){
  var address = serverSocket.address();
  console.log('Server is listening at port', address.port, '–', 'Server ip:', address.address);
  console.log('Server is IP4/IP6', address.family);
});


// emits after the socket is closed using socket.close();
serverSocket.on('close', function() {
	console.log('Socket is closed.');
});

// emits when any error occurs
serverSocket.on('error', function(error){
	console.error('Error: ' + error);
});

serverSocket.bind(2222);