// //This is a global variable
// author = 'Shashant Panwar';
//
// (function () {
//     'use strict()';
//
//     var demoapp = angular.module('DItest', [ ]);
//
//     //preffered way - 1 to save DI in minification
//     demoapp.controller('DICtrl', DICtrl);
//     DICtrl.$inject = ['$scope', '$filter'];
//     function DICtrl($scope, $filter) {
//         $scope.lname = "nishu";
//
//         $scope.upper = function() {
//             var upCase = $filter('uppercase');
//             $scope.lname = upCase($scope.lname);
//         };
//     }
//
//     //preffered way - 2 to save DI in minification
//     demoapp.controller('DICtrl2',
//                         ['$scope', '$filter',
//                             function ($scope, $filter) {
//         $scope.uname = "NISHU";
//
//         $scope.lower = function() {
//             var lowCase = $filter('lowercase');
//             $scope.uname = lowCase($scope.uname);
//         };
//     }]);
//   })();

//minified version of above js charCode
author="Shashant Panwar",function(){"use strict()";function n(n,e){n.lname="nishu",n.upper=function(){var r=e("uppercase");n.lname=r(n.lname)}}var e=angular.module("DItest",[]);e.controller("DICtrl",n),n.$inject=["$scope","$filter"],e.controller("DICtrl2",["$scope","$filter",function(n,e){n.uname="NISHU",n.lower=function(){var r=e("lowercase");n.uname=r(n.uname)}}])}();
