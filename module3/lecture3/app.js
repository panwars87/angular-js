// author = "Shashant Panwar"

(function () {
'use strict()';

var app = angular.module('module3', []);
app.controller('MenuCategoriesController', MenuCategoriesController);
app.service('MenuCategoriesService', MenuCategoriesService);
app.constant('ApiBase', 'http://davids-restaurant.herokuapp.com');

MenuCategoriesController.$inject = ['MenuCategoriesService'];
function MenuCategoriesController(MenuCategoriesService) {
  var menu = this;
  var promise = MenuCategoriesService.getMenuCategories();

  promise.then(function (response) {
    menu.categories = response.data;
  }).catch(function (error) {
    alert('Error while fetching menu');
  });

  menu.getMenu = function(shortName) {
      console.log(shortName);
      var menuPromise = MenuCategoriesService.getMenuForCategory(shortName);
      menuPromise.then(function (response) {
          console.log(response.data);
          menu.category = response.data.category;
          menu.menu_items = response.data.menu_items;
      }).catch(function (error) {
         alert('Error while fetching menu');
      });
    };

}

MenuCategoriesService.$inject = ['$http', 'ApiBase'];
function MenuCategoriesService($http, ApiBase) {
  var menuService = this;

  menuService.getMenuCategories = function () {
      var response = $http({
          method: "GET",
          url: (ApiBase + '/categories.json')
      });
      return response;
    };

  menuService.getMenuForCategory = function(shortName) {
    var response = $http({
        method: "GET",
        url : (ApiBase + '/menu_items.json'),
        params: {
            category: shortName
        }
    });
    return response;
  };
}
})();
