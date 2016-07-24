angular.module('blag',['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state("home",{
    url:"/",
    templateUrl:"./templates/home.html"
  }).state("blag", {
    url:"/blag",
    templateUrl:"./templates/blag.html"
  }).state("contact",{
    url:"/contact",
    templateUrl:"./templates/contact.html"
  }).state("newBlag",{
    url:"/newblag",
    templateUrl:"./templates/newBlag.html"
  })
  $urlRouterProvider.otherwise('/');
});
