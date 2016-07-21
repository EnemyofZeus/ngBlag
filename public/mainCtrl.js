angular.module('blag').controller('mainCtrl', function($scope, mainServ){

  $scope.getBlags = function(){
    mainServ.getBlags()
    .then(function(res){
      $scope.blags = res;
    })
  }
});
