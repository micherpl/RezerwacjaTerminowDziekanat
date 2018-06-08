
'use strict'

var module = angular.module('app.controllerLista', ['ngRoute']);
module.controller('ListaController',['$scope', '$http', '$location', function($scope, $http, $location) {

    $scope.initFunc = function () {
        $http.get('/terminy').then(function (response) {
            $scope.terminy = response.data;
        }, function(response) {
            alert( "failure message: " + JSON.stringify({data: response}));
        });
    };
    $scope.goTo = function(id){
        var path = "/termin/"+id;
        $location.path( path );
    };

    $scope.onClickFunc= function(){
        var path = "/nowyTermin";
        $location.path( path );
    };

    $scope.initFunc();

}]);