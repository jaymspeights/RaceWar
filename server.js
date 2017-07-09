'use strict';
let express = require('express');
let app = express();

var PORT = 4000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/html/index.html');
});

app.get('/multi', function(req, res){
  console.log('multi');
  //create multiplayer game
  res.send(id);
  res.sendFile(__dirname + '/html/game.html');
});

app.get('/single', function(req, res){
  console.log('single');
  //create singleplayer game
  res.sendFile(__dirname + '/html/game.html');
});

app.get('/public/*', function(req, res){
  res.sendFile(__dirname + req.url);
});

app.listen(PORT);
