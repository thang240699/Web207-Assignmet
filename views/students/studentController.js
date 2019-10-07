'use strict';

angular.module('myApp.student', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/list', {
                templateUrl: 'views/students/student.html',
                controller: 'AccCtrl',
                resolve: {
                    initialData: (studentService) => {
                        return studentService.getStudents();
                    }
                }
            })
            .when('/login', {
                templateUrl: 'views/students/login.html',
                controller: 'loginCtrl'
            })
            .when('/register', {
                templateUrl: 'views/students/register.html',
                controller: 'registerCtrl'
            })
            .when('/logout', {
                templateUrl: 'views/students/logout.html',
                controller: 'logoutCtrl'
            })

    }])
    .controller('AccCtrl', ['studentService', '$scope', function (studentService, $scope) {
        $scope.students = studentService.getList();
        console.log($scope.students);
        // $scope.info = false;
        // $scope.login = () => {
        //     console.log($scope.student.username);
        //     console.log($scope.students);
        //     angular.forEach($scope.students, function (value, key) {
        //         if ($scope.student.username === value.username && $scope.student.password === value.password) {
        //             console.log("login");
        //             $scope.user = value;
        //             $scope.info = true;
        //         }
        //         // if (user != null) {
        //         //     // alert("Đăng nhập thành công");
        //         //     console.log(user);
        //         //
        //         // }
        //
        //     })
        // };
        $scope.student = {};
        $scope.index = -1;

        $scope.clear = () => {
            $scope.student = {};
            $scope.index = -1;
        };

        $scope.insert = () => {
            $scope.students.push(angular.copy($scope.student));
            $scope.clear();
        };

        $scope.update = () => {
            $scope.students[$scope.index] = angular.copy($scope.student);
            $scope.clear();
        };

        $scope.delete = (index) => {
            $scope.index = index;
            $scope.students.splice($scope.index, 1);
        };

        $scope.cancel = () => {
            if ($scope.index === -1) {
                $scope.clear();
            } else {
                $scope.edit($scope.index)
            }
        };

        $scope.edit = (index) => {
            $scope.index = index;
            $scope.student = angular.copy($scope.students[index]);
        }

    }])
    .controller('loginCtrl', function (studentService, $scope, $location) {
        $scope.student = {};
        $scope.errorMessage = null;

        $scope.checkLogin = () => {
            studentService.checkLogin($scope.student.username, $scope.student.password).then(date => {
                if (date != null && date.length > 0) {
                    studentService.setIsLogin(true);
                    $location.path('/');
                    $scope.errorMessage = null;
                } else {
                    studentService.setIsLogin(false);
                    $scope.errorMessage = "Tài khoản hoặc mật khẩu không đúng !!!";
                }
            });
        };
    })
    .controller('registerCtrl', function (studentService, $scope, $location) {
        // $scope.register = () => {
        //     $scope.students.push(angular.copy($scope.student));
        //     console.log($scope.students);
        //
        // }
        $scope.student = {};
        $scope.getRegister = () => {
            if ($scope.student.username === null) {
                alert("loi");
            } else {
                if ($scope.student != null) {
                    studentService.getRegister($scope.student);
                    $location.path('/login');
                }
            }

        }
    })
    .controller('logoutCtrl', function (studentService, $scope, $location) {
        $scope.logout = () => {
            studentService.setIsLogin(false);
            $location.path('/');
        };
        $scope.cancelLogout = () => {
            $location.path('/');
        };
    });