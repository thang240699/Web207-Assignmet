'use strict';

angular.module('myApp.nav', []).controller('navCtrl', function (studentService, $scope) {
    $scope.isLogin = () => {
        return studentService.getIsLogin();
    };
});