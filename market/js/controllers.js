 "use strict"

var skelrilMarketApp = angular.module('skelrilMarketApp', []);

skelrilMarketApp.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});

chatCraftWebApp.controller('MarketController', function($scope, $http) {
  $scope.loading = true;

  $http.get('http://service.skelril.com/market/index.json').then(
    function(response) {
      $scope.marketItems = angular.fromJson(response.data);
      $scope.loading = false;
    }
  );
})
