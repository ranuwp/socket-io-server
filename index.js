const logger     = require('morgan');
const express    = require('express');
const bodyParser = require('body-parser');
const socketio   = require('socket.io');

const port = 8000;
const server = express().listen(port, () => console.log('App listening on port ' + port));

const websocket = socketio(server); //Initiate Socket

websocket.on('connection', (socket) => {
  console.log('new user connected');
  socket.on('event', (data) => {
    console.log('Event', data);
  });
  socket.on('channel1', (data) => {
    console.log('Greetings from RN app', data);
    socket.emit('channel1', data)
  })

  socket.on('channel2', (obj) => {
    console.log('Object from RN app', obj);
  })

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});
