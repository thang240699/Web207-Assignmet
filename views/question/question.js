'use strict';

angular.module('myApp.question', ['ngRoute'])
    .config( ($routeProvider) => {
        $routeProvider.when('/question', {
            templateUrl: 'views/question/question.html',
        });
    });