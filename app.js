'use strict';

angular.module('myApp', [
    'ngRoute',
    'myApp.subject',
    'myApp.quiz',
    'myApp.student',
    'myApp.nav',
    'myApp.about',
    'myApp.contact',
    'myApp.feedback',
    'myApp.question'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/'});
}]);
