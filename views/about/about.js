'use strict';

angular.module('myApp.about', ['ngRoute'])
    .config( ($routeProvider) => {
        $routeProvider.when('/about-us', {
            templateUrl: 'views/about/about.html',
        });
    });