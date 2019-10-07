'use strict';
angular.module('myApp')
    .service('studentService', ['$http', function ($http) {
        var studentService = {};
        var user = [];
        var list = [];
        var isLogin = false;
        var self = this;

        studentService.getIsLogin = () => {
            return isLogin;
        };
        studentService.setIsLogin = (value) => {
            isLogin = value;
        };
        studentService.checkLogin = (username, password) => {
            var prosime = user.then((data) => {
                // var students;
                // angular.forEach(data, function (value, key) {
                //     if (username === value.username && password === value.password) {
                //         console.log(value);
                //         students =  value;
                //     }
                // });
                var students = data.filter(item => {
                    return item.username === username && item.password === password;
                });
                return students;
            });
            return prosime;
        }
        studentService.getStudents = function () {
            console.log("Test ");
            var promise = $http.get('db/Students.js').then(response => {
                list = response.data;
                return list;
            }).catch(reason => alert(reason));
            return promise;
        };
        user = studentService.getStudents();
        console.log(user);
        //Đăng ký ^^
        studentService.getRegister = function (student) {
            var prosime = user.then(data => {
                data.push(student);
            });
            return prosime;
        };
        studentService.getList = function () {
            user.then(response => {
                list = response.data;
                // console.log(response.data);
                return list;
            })
            return list;
        };


        return studentService;
    }]);