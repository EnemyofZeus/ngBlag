var blagModel = require('./blagModel.js');

module.exports = {
  create: function(req, res){
    if(err){
      res.send(er)
    }
      res.send(result)
  },
  read: function(req, res){
    blagModel
    .find(req.query)
    .exec(function(err, result){
      if (err){
        res.send(err)
      }
      res.send(result)
    })
  }
}
