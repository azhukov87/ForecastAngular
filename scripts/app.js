// MODULE
var wheatherApp = angular.module("wheatherApp", ["ngRoute", "ngResource"]);

//ROUTES
wheatherApp.config(function ($routeProvider) {

    $routeProvider.

    when("/", {
        templateUrl: "pages/home.html",
        controller: "homeController"
    }).

    when("/forecast", {
        templateUrl: "pages/forecast.html",
        controller: "forecastController"
    });

});

//SERVICES
wheatherApp.service("cityService", function() {
    this.city = "New York, NY";
});

//CONTROLLERS
wheatherApp.controller("homeController", ["$scope", "cityService", function ($scope, cityService) {
    $scope.city = cityService.city;

    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });
}]);

wheatherApp.controller("forecastController", ["$scope", "cityService", function ($scope, cityService) {
    $scope.city = cityService.city;
}]);
