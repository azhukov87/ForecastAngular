// MODULE
var wheatherApp = angular.module("wheatherApp", ["ngRoute", "ngResource"]);

//ROUTES
wheatherApp.config(function ($routeProvider) {

    $routeProvider.

    when("/", {
        templateUrl: "/pages/home.htm",
        controller: "homeController"
    }).

    when("/forecast", {
        templateUrl: "/forecast.html",
        controller: "forecastController"
    });

});

//CONTROLLERS
wheatherApp.controller("homeController", ["$scope", function ($scope) {

}]);

wheatherApp.controller("forecastController", ["$scope", function ($scope) {

}]);
