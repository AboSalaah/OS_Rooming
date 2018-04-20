'use strict';
class Room {
  constructor(name, good,bad) {
    this.name = name;
    this.good = good;
    this.bad=bad;
  }
  // Getter
  get roomName() {
    return this.name;
  }
  get goodNumbers(){
    return this.good;
  }
  get badNumbers(){
    return this.bad;
  }
}
var rooms_map=new Map();
let rooms_players={
  players : []
}

var myMap = new Map()
const system_room_number=5;
var express = require('express');
var app=express();
var server = app.listen(3000,function(){
  console.log("inti rooms now");
  for(let i =1;i<=system_room_number;i++){
    rooms_map.set("SystemRoom: "+i,new Room(("Systemroom: "+i),0,0));
 }
   console.log(rooms_map);
});
app.use(express.static('public'));
var socket = require('socket.io');
var io=socket(server);
io.sockets.on('connection',newConnection);
function newConnection(socket){
  console.log("user: "+socket.id);
  socket.on('room', function(data) {

    //  console.log("data.rooom : " + data.room);
      socket.join(data.room,function(){
        console.log("data.room : "+data.room);
          rooms_players[data.room]= [];
          socket.id= rooms_players[data.room].length;
          console.log(rooms_players[data.room].length);
          rooms_players[data.room][socket.id]=socket;
          console.log(rooms_players[data.room]);   
      });

      console.log("users in room: "+data.room);
      var room = io.sockets.adapter.rooms[data.room];
      console.log(room.length);
  });

 

}

app.get('/rooms',function(req,response){
  console.log("Room handler was called.");
  response.writeHead(200, {"Content-Type": "application/json"});
  var temp =[];
  var iterator1 = rooms_map[Symbol.iterator]();

  for (const [key, value] of rooms_map) {
    console.log(`${key}: ${value}`);

     temp.push(value);
    }
   console.log(temp);
  var json = JSON.stringify({ 
    rooms : temp
  });
  response.end(json);
});
app.get('/', function(req, res){
  console.log(res);
});


