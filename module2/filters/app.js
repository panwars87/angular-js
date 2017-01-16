//author = 'Shashant Panwar'

(function () {
    var demoapp = angular.module('app', []);
    demoapp.controller('testCtrl', testCtrl);

    //declaring custom filter factory
    demoapp.filter('custom', customFilterFactory);
    demoapp.filter('textchange', customFilterWithParamFactory);

    //inject customfilter into controller
    testCtrl.$inject = ['$scope', '$filter', 'customFilter'];

    //pass customfilter into test controller as a param
    function testCtrl($scope, $filter, customFilter) {
        $scope.message = 'Hello';

        $scope.changeMsg = function() {
            $scope.message = customFilter($scope.message);
        };
    };

    //creating a custom factory filter
    function customFilterFactory() {
        return function() {
            return "Message return from filter";
        }
    };

    //new custom factory with param filter
    function customFilterWithParamFactory() {
        return function(input, message) {
            message = message || "" ;
            input = input || "" ;
            return message + input;
        }
    };
})();
