// author = "Shashant Panwar"

(function(){
    'use strict()';

    var app = angular.module('module2', []);
    app.controller('ShoppingListController', ShoppingListController);
    app.controller('ShoppingAddController', ShoppingAddController);
    app.service('ShoppingListService' , ShoppingListService);

    ShoppingListController.$inject = ['ShoppingListService'];
    function ShoppingListController(ShoppingListService){
        var shoppingList = this;
        shoppingList.itemsList = ShoppingListService.getItems();

        shoppingList.removeItem = function(itemIndex){
            ShoppingListService.removeItem(itemIndex);
        }
    }

    ShoppingAddController.$inject = ['ShoppingListService'];
    function ShoppingAddController(ShoppingListService){
        var addShopper = this;

        addShopper.addItem = function(){
            ShoppingListService.addItem(addShopper.name, addShopper.quantity);
        }
    }

    function ShoppingListService(){
        var service = this;
        var items = [];

        service.getItems = function(){
            return items;
        }

        service.addItem = function(name, quantity){
            var item = {
                name: name,
                quantity: quantity
            };
            items.push(item);
        }

        service.removeItem = function(itemIndex){
            items.splice(itemIndex, 1);
        }
    }
})();
