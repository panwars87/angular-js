// author = "Shashant Panwar"

(function(){
    'use strict()';

    var app = angular.module('module2', []);
    app.controller('ParentController', ParentController);
    app.controller('ChildController', ChildController);

    ParentController.$inject = ['$scope'];
    function ParentController($scope){
        var parent = this;
        parent.value = 'parentValue';
        parent.fixedValue = 5;
    }

    ChildController.$inject = ['$scope'];
    function ChildController($scope){
        var child = this;
        child.value = 'childValue';
    }
})();
