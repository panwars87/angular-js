// author = "Shashant Panwar"

(function(){
    'use strict()';

    var app = angular.module('module2', []);
    app.controller('TestController', TestController);

    TestController.$inject = ['$scope'];
    function TestController($scope){
        $scope.toDoList = ['Milk', 'Coffee', 'Tazo', 'Chips', 'Water'];

        $scope.addToDo = function(){
            console.log($scope.todo);
            $scope.toDoList.push($scope.todo);
            $scope.todo='';
        };
    }
})();
