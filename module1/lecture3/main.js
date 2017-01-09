//This is a global variable
author = 'Shashant Panwar';

(function () {
    //use strict to make sure we seperate local and global variable.
    'use strict()';

    //define a new angular module for app
    var demoapp = angular.module('firstApp', []);

    //define a controller part of 'app' module
    demoapp.controller('firstCtrl', function ($scope) {
        $scope.username = 'Nishu';

        $scope.fnHello = function () {
            return 'Hello';
          };
      });

    //second controller to handle name controller functionality.
    demoapp.controller('nameCtrl', function ($scope) {
          $scope.totalValue = 0;

          $scope.fnDisplayNumeric = function () {
              var totalNameValue = calculateNameValue($scope.name);
              $scope.totalValue = totalNameValue;
            };

          function calculateNameValue(string) {
              var totalStrValue = 0;
              for(var i = 0; i < string.length; i++) {
                  totalStrValue += string.charCodeAt(i);
              }
              return totalStrValue;
            }
        });
  })();
