var http=require('http');
var socket_v=require('socket.io');
var express = require('express');
var app = express();
var  io_client = require("socket.io-client");


var socket = io_client.connect('http://localhost:3003/communication');

var server=http.createServer(app);
// var io=socket(server);

var app_socket=express();
var server_socket=http.createServer(app_socket);
var io=socket_v(server_socket);


var port=3006;

var port_s=3007;

server.listen(port,console.log(`Server running at port ${port}`));
server_socket.listen(port_s,console.log(`Server running for socket at port ${port_s}`));

var nsp = io.of('communication');
nsp.on('connection', (socket_cl) => {
    console.log('socket connection made and socket id  : ', socket.id);
  
  socket.on('connectWithCommunication',(info)=>{
    console.log('socket connection established');
    console.log(info);
    socket_cl.emit('connectWithClient',info);
    });

});
