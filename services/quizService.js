'use strict';
angular.module('myApp')
    .service('quizService', function ($http) {
        var quizService = {};
        var list = [];
        var self = this;

        quizService.getQuestions = (subjectCode) => {
            console.log("Test Questions");
            var promise = $http.get('db/Quizs/' + subjectCode + ".js").then(response => {
                list = response.data;
                console.log(response.data);
                return list;
            }).catch(reason => alert(reason));

            return promise;
        };
        quizService.getQuestion = (index) => {
            if (list.length <= 0 || index >= list.length)
                return null;
            return list.slice(index, 1);
        };
        return quizService;
    });
