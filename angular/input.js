var app = angular.module('myMod');
app.controller('inputCtrl', function($scope, nameFactory){
  var totalInput = ['noun1', 'adjective1', 'adverb', 'verb1', 'noun2', 'verb2', 'adjective2'];
  $scope.totalInput = function(totalInput){
  $scope.words = totalInput;
  nameFactory.setInput($scope.words);
  };
});
