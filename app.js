var app = angular.module('myMod', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    controller: 'inputCtrl',
    templateUrl: 'partials/input.html'
  })
  .when('/output', {
    controller: 'displayCtrl',
    templateUrl: 'partials/display.html'
  });
});
