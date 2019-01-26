const express=require('express');
const app=express();
const http=require('http').Server(app);
const io=require('socket.io')(http);

app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/index.html');
})

io.on('connection',function(socket){
	socket.on('clientside',function(data){
		io.sockets.emit('serverside',data);
	})
})

http.listen(3000,function(){
	console.log("server running on 3000");
})