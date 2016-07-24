angular.module('blag').service('mainServ', function($http){
  this.getBlags = function(){
    return $http({
      method:'GET',
      url:'/blags'
    }).then(function(res){
      return res.data;
    })
  }
  this.postBlag = function(blag){
    return $http({
      method: 'POST',
      url:'/blags',
      data:blag
    }).then(function(res){
      console.log(res);
      return res
    })
  }
});
