angular.module('starter.controllers', [])

.controller('PageController', function($location, $scope, Scroll) {

  $scope.dados = {};

  $scope.enviar = function() {
    console.log($scope.dados);
  }

  $scope.goToElement = function(eID){
      var hereID = eID;

      $location.hash(hereID);

      Scroll.scrollTo(hereID);
  };
})
