var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

  server.listen(3000);
  console.log('running on 3000');
  app.use('/assets/', express.static('assets'));
  app.use('/', express.static('.'));

  app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
  });

  app.get('/controller', function (req, res) {
    res.sendfile(__dirname + '/controller.html');
  });

  io.sockets.on('connection', function (socket) {
    socket.on('buttonPress', function(button, press) {
      console.log(button + ' is ' + press);
      socket.emit('buttonUpdate', button, press);
    });
  });

