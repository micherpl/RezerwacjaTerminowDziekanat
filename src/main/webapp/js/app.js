
'use strict'

var app = angular.module('rezerwacjaTerminowDziekanat', ['ngRoute',
    'app.controllerLista', 'app.controllerTermin', 'app.controllerNowy'
]);
app.config(function($routeProvider,$locationProvider) {

    $routeProvider.
        when('/', {templateUrl: 'views/listaTerminow.html', controller: 'ListaController'}).
        when('/termin/:terminId', {templateUrl: 'views/termin.html', controller: 'TerminController'}).
        when('/nowyTermin', {templateUrl: 'views/nowyTermin.html', controller: 'NowyController'}).
        otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);
});