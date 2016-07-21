var mongoose = require('mongoose');

var blagModel = new mongoose.Schema({
  title: {type:String},
  description: {type:String},
  date: {type:Date, default:Date.now},
  body: {type:String}
})

module.exports = mongoose.model('Blag', blagModel);
