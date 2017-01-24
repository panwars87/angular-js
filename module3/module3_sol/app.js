(function () {
  var app = angular.module("NarrowItDownApp", []);

  app.controller('NarrowItDownController', NarrowItDownController);
  app.service('MenuSearchService', MenuSearchService);
  app.directive('foundItems', FoundItemsDirective);
  app.constant('API_URL', 'https://davids-restaurant.herokuapp.com/menu_items.json');

  FoundItemsDirective.$inject = [];
  function FoundItemsDirective() {
      var ddo = {
          restrict: 'E',
          templateUrl: 'items.template.html',
          scope: {
               foundItems: '<',
               onRemove: '&'
           },
          controller: FoundItemsDirectiveController,
          controllerAs: 'dCtrl',
          bindToController: true
      };

      return ddo;
  }

  function FoundItemsDirectiveController() {
      var dCtrl = this;

      dCtrl.isListEmpty = function () {
        if (dCtrl.foundItems.length > 0) {
            return false;
        } else {
            return true;
        }
      };

  }

  NarrowItDownController.$inject = ['$q', 'MenuSearchService'];
  function NarrowItDownController($q, MenuSearchService) {
    var appCtrl = this;
    appCtrl.found = [];

    appCtrl.checkMenuChoice = function () {
          var promise = MenuSearchService.getMatchedMenuItems(appCtrl.searchTerm);

          promise.then(function (response) {
              //console.log(response);
              appCtrl.found = response;
            }).catch(function (errorResponse) {
              alert('error in service call', errorResponse);
            });

        };

    appCtrl.removeMenuChoice = function (index) {
            MenuSearchService.removeMenuChoice(index);
        };
  }

  MenuSearchService.$inject = ['$q', '$http', 'API_URL'];
  function MenuSearchService($q, $http, API_URL) {
    var service = this;
    var foundItems = [];

    service.getMatchedMenuItems = function (searchTerm) {
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: (API_URL)
          }).then(function (response) {
            //console.log(response.data);
            foundItems = checkSearchTerm(response.data.menu_items, searchTerm);
            //console.log('FI ',foundItems.length);
            deferred.resolve(foundItems);
          }).catch(function (error) {
            deferred.reject(error);
            alert('Error while fetching menu');
          });

        return deferred.promise;
      };

    service.removeMenuChoice = function (index) {
        foundItems.splice(index, 1);
      };

    function checkSearchTerm(items, searchTerm) {
        //console.log(items);
        var temp_found_items = [];
        for (var i=0; i<items.length; i++) {
            var item = items[i];
            var desc = item.description;
            if ((desc) && (searchTerm) &&
                (desc.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)) {
                temp_found_items.push(item);
              }
          }
          //console.log('temp aray lenght: ', temp_found_items);
      return temp_found_items;
    }
  }
})();

//!function(){function e(){var e={restrict:"E",templateUrl:"items.template.html",scope:{foundItems:"<",onRemove:"&"},controller:t,controllerAs:"dCtrl",bindToController:!0};return e}function t(){var e=this;e.isListEmpty=function(){return e.foundItems?e.foundItems.length:void 0}}function n(e,t){var n=this;n.checkMenuChoice=function(){var e=t.getMatchedMenuItems(n.searchTerm);e.then(function(e){console.log(e),n.found=e})["catch"](function(e){alert("error in service call",e)})},n.removeMenuChoice=function(e){t.removeMenuChoice(e)}}function r(e,t,n){function r(e,t){for(var n=[],r=0;r<e.length;r++){var o=e[r],c=o.description;""!=c&&c.toLowerCase().indexOf(t.toLowerCase())>-1&&n.push(o)}return n}var o=this,c=[];o.getMatchedMenuItems=function(o){var i=e.defer();return t({method:"GET",url:n}).then(function(e){c=r(e.data.menu_items,o),i.resolve(c)})["catch"](function(e){i.reject(e),alert("Error while fetching menu")}),i.promise},o.removeMenuChoice=function(e){c.splice(e,1)}}var o=angular.module("NarrowItDownApp",[]);o.controller("NarrowItDownController",n),o.service("MenuSearchService",r),o.directive("foundItems",e),o.constant("API_URL","https://davids-restaurant.herokuapp.com/menu_items.json"),e.$inject=[],n.$inject=["$q","MenuSearchService"],r.$inject=["$q","$http","API_URL"]}();
