
'use strict'

var module = angular.module('app.controller.index', []);
module.controller('IndexController', function($scope, $http) {

    $scope.initFunc = function () {
        $http.get('/terminy').then(function (response) {
            $scope.terminy = response.data;
        }, function(response) {
            alert( "failure message: " + JSON.stringify({data: response}));
        });
    }

    $scope.initFunc();

});