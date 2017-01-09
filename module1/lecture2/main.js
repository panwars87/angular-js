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
  })();
