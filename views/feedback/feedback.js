'use strict';

angular.module('myApp.feedback', ['ngRoute'])
    .config( ($routeProvider) => {
        $routeProvider.when('/feedback', {
            templateUrl: 'views/feedback/feedback.html',
        });
    });