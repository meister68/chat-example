var express = require('express')();
var http = require('http').Server(express);
var io = require('socket.io')(http);
var port = process.env.PORT || 6800;
var username;
//const app = express();


express.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('user',function(info){
    socket.broadcast.emit('user', info+' joined'); 
  socket.on('chat message', function(msg){
    io.emit('chat message', info+": "+ msg);
    console.log(info)
  }); 
});


  
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});