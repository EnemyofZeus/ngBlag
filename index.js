var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var blagCtrl = require('./blagCtrl.js')
var config = require('./config.js');
var User = require('./userModel.js');
var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(
  function(req, username, password, done){
    User.findOne({username:username}, function(err, user){
      if(err) { return done(err); }

      if(!user){
        return done(null, false, {message: 'Incorrect username.'});
      }

      if(!user.validPassword(password)){
        return done(null, false, {message: 'Incorrect password.'});
      }
      return done(null, user);
    });
  }
));

app.post('/login', passport.authenticate('local', { successRedirect: '/',
                                                    failureRedirect: '/#/login',
                                                    failureFlash: false})
);

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
