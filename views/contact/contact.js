'use strict';

angular.module('myApp.contact', ['ngRoute'])
    .config( ($routeProvider) => {
        $routeProvider.when('/contact', {
            templateUrl: 'views/contact/contact.html',
        });
    });