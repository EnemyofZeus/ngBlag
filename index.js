var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var blagCtrl = require('./blagCtrl.js')
var config = require('./config.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'))

app.get('/blags', blagCtrl.read);

app.post('/blags', blagCtrl.create);

mongoose.connect(
  "mongodb://localhost:27017/blag"
)

mongoose.connection.once('open', function(){
  console.log('We found the database');
})

app.listen(config.port, function(){
  console.log('The server is live');
})
