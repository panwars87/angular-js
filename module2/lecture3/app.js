// author = "Shashant Panwar"

// (function(){
//     'use strict()';
//
//     var app = angular.module('module2', []);
//     app.controller('TestController', TestController);
//
//     TestController.$inject = ['$scope'];
//     function TestController($scope){
//         $scope.toDoList = ['Read', 'Write', 'Help'];
//     }
// })();

// try normal filter function in javascript
var toDoList = ['Milk', 'Coffee', 'Tazo', 'Chips', 'Water'];

//creating a filter function
var searchValue = document.getElementById('searchValue');
function filterSearch(value) {
    if (searchValue == undefined || searchValue == '' ) return;

    return value.indexOf(searchValue.value) !== -1;
}

var searchToDoList = toDoList.filter(filterSearch);
console.log('Filtered todoList is: ', searchToDoList);

if (searchToDoList != undefined || searchToDoList != ""){
    document.getElementById("result").innerHTML = searchToDoList;
}
