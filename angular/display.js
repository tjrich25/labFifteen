var app = angular.module('myModule');
app.controller('displayCtrl', function($scope, nameFactory){
  $scope.input = nameFactory.setOutput();
});
