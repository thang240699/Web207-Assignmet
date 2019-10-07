'use strict';

angular.module('myApp.subject', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/subjects/subject.html',
            controller: 'SubjectCtrl',
            resolve: {
                initialData: (subjectService) => {
                    return subjectService.getSubjects();
                }
            }
        });
    }])
    .controller('SubjectCtrl', ['subjectService', '$scope', function (subjectService, $scope) {
        $scope.subjects = subjectService.getList();
        //phân trang
        $scope.begin = 0;
        $scope.pageCount = Math.ceil($scope.subjects.length / 6);
        $scope.first = () => {
            $scope.begin = 0;
        };
        $scope.prev = () => {
            if ($scope.begin > 0) {
                $scope.begin -= 6;
            }
        };
        $scope.next = () => {
            if ($scope.begin < ($scope.pageCount - 1) * 6) {
                $scope.begin += 6;
            }
        };

        $scope.last = () => {
            $scope.begin = ($scope.pageCount - 1) * 6;
        };
    }]);