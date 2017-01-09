//author = 'Shashant Panwar';

(function () {
    'use strict()';

    var app = angular.module('LunchCheck', []);
    app.controller('LunchCheckController', LunchCheckController);

    // controller dependency's injection....
    LunchCheckController.$inject = ['$scope', '$filter'];

    // controller code starts here....
    function LunchCheckController($scope, $filter) {
        $scope.userinput = '';
        $scope.usermessage = '';
        $scope.fontcolor = '';

        $scope.check = function() {
            var itemList = $scope.userinput;
            if (itemList == "") {
                $scope.usermessage = 'Please enter data first';
                $scope.fontcolor = 'red';
            } else {
                $scope.usermessage = checkListCount(itemList);
                $scope.fontcolor = 'green';
            }

            return $scope.usermessage;
        };

        function checkListCount(itemList) {
            var comma = ",";
            var itemCount = 0;
            var arrOfItem = splitString(itemList, comma);

            for(var i = 0; i<arrOfItem.length; i++) {
                if(arrOfItem[i].trim() != "") {
                    itemCount += 1;
                }
            }

            return printMessage(itemCount);
        };

        function printMessage(itemCount) {
            if (itemCount <= 3) {
                return "Enjoy!";
            } else {
                return "Too much!";
            }
        };

        function splitString(string, seperator) {
            return string.split(seperator);
        };
    };

})();

//minified version of app.js
//!function(){"use strict()";function e(e,r){function n(e){for(var r=",",n=0,s=u(e,r),c=0;c<s.length;c++)""!=s[c].trim()&&(n+=1);return t(n)}function t(e){return 3>=e?"Enjoy!":"Too much!"}function u(e,r){return e.split(r)}e.userinput="",e.usermessage="",e.check=function(){var r=e.userinput;return""==r?e.usermessage="Please enter data first":e.usermessage=n(r),e.usermessage}}var r=angular.module("LunchCheck",[]);r.controller("LunchCheckController",e),e.$inject=["$scope","$filter"]}();
