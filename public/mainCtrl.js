angular.module('blag').controller('mainCtrl', function($scope, mainServ){
  $scope.blags;

  $scope.master = {};

  $scope.getBlags = function(){
    mainServ.getBlags()
    .then(function(res){
      console.log($scope.blags);
      $scope.blags = res;
    })
  }
  $scope.postBlag = function(blag){
    angular.copy(blag, $scope.master);

    mainServ.postBlag(blag);
  }
  $scope.getBlags();
});
