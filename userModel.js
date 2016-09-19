var mongoose = require('mongoose');

var userModel = new mongoose.Schema({
  username: {type:String},
  password: {type:String}
})

module.exports = mongoose.model('User', userModel);
