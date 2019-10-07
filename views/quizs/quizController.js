'use strict';

angular.module('myApp.quiz', ['ngRoute'])
    .config(['$routeProvider' ,function ($routeProvider) {
        $routeProvider.when('/quiz/:subjectCode', {
            templateUrl: 'views/quizs/quiz.html',
            controller: 'QuizCtrl'
        });
    }])
    .controller('QuizCtrl',['quizService', '$scope', '$routeParams', '$interval', function (quizService, $scope, $routeParams, $interval) {
        $scope.currentQuestion = 0;
        $scope.questions = [];
        $scope.time = 90;
        $scope.quizMarks = 0;
        $scope.answer = {};

        var stop = $interval(()=>{$scope.time --}, 1000); //Thời gian đếm
        console.log($routeParams.subjectCode);
        quizService.getQuestions($routeParams.subjectCode).then((data)=>{
            $scope.questions = data;
        });

        $scope.question = () => {
            return $scope.questions[$scope.currentQuestion];
        };

        $scope.setQuestionSerial = (Serial) => {
            if ($scope.answer.choose == $scope.question().AnswerId) {
                $scope.quizMarks += $scope.question().Marks;
            }
            $scope.currentQuestion = Serial;

            return $scope.currentQuestion;
        };

        $scope.questionTotal = () => {
            return $scope.questions.length;
        };

        $scope.sumup = false;

        $scope.submitQuiz = () => {
            if ($scope.answer.choose == $scope.question().AnswerId) {
                $scope.quizMarks += $scope.question().Marks;
            }
            $scope.sumup = true;
            $interval.cancel(stop);
        }
    }]);