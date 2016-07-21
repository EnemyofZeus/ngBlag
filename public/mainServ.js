angular.module('blag').service('mainServ', function($http){
  this.getBlags = function(){
    return $http({
      method:'GET',
      url:'/blags'
    })
  }
});
