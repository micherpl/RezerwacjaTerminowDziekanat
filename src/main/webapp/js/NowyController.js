
'use strict'

var module = angular.module('app.controllerNowy', ['ngRoute']);
module.controller('NowyController', ['$scope', '$http', '$location', function($scope, $http, $location) {

    $scope.termin = {
        data_pocz: new Date(),
        data_kon: new Date()
    };

    $scope.minDate = new Date();

    $scope.termin.data_pocz = new Date(
        $scope.termin.data_pocz.getFullYear(),
        $scope.termin.data_pocz.getMonth(),
        $scope.termin.data_pocz.getDate(),
        $scope.termin.data_pocz.getHours(),
        $scope.termin.data_pocz.getMinutes() );

    $scope.termin.data_kon = new Date(
        $scope.termin.data_kon.getFullYear(),
        $scope.termin.data_kon.getMonth(),
        $scope.termin.data_kon.getDate(),
        $scope.termin.data_kon.getHours(),
        $scope.termin.data_kon.getMinutes() );


    $scope.createTermin = function(){
        var terminObj = {
            nazwa: $scope.termin.nazwa,
            opis: $scope.termin.opis,
            email: $scope.termin.email,
            data_pocz: $scope.termin.data_pocz,
            data_kon: $scope.termin.data_kon
        };
        $http.post('/terminy', terminObj).then(function (response) {
            console.log(response.data);
        }, function(response) {
            alert( "failure message: " + JSON.stringify({data: response}));
        });
        $location.path("/");
    };

}]);