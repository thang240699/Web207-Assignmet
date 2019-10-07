'use strict';
angular.module('myApp')
    .service('subjectService', function ($http) {
        var subjectService = {};
        var list = [];
        var self = this;

        subjectService.getSubjects = () => {
            var promise = $http.get('db/Subjects.js').then(response => {
                list = response.data;
                return list;
            }).catch(reason => alert(reason));

            return promise;
        };
        subjectService.getList = () => {
            return list;
        };

        return subjectService;
    });