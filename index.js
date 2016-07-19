var express = require('express');

var config = require('./config.js');

var app = express();
app.use(express.static(__dirname+'/public'))
app.listen(config.port, function(){
  console.log('The server is live');
})
