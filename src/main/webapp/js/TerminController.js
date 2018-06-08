
'use strict'

var module = angular.module('app.controllerTermin', ['ngRoute']);
module.controller('TerminController', ['$scope', '$http', '$location', function($scope, $http, $location) {

    var terminId;
    var url = $location.path().split('/');
    terminId = url[2];

    $scope.initFunc = function () {
        $http.get('/terminy', {params: {id: terminId}}).then(function (response) {
            $scope.termin = response.data;
        }, function(response) {
            alert( "failure message: " + JSON.stringify({data: response}));
        });
    };

    $scope.deleteTermin = function () {
        $http.delete('/terminy', {params: {id: terminId}}).then(function (response) {
            console.log(response.data);
        }, function(response) {
            alert( "failure message: " + JSON.stringify({data: response}));
        });
        $location.path("/");
    };

    $scope.initFunc();
}]);