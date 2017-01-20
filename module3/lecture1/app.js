// author = "Shashant Panwar"

(function(){
    'use strict()';

    var app = angular.module('module3', []);
    app.controller('ShoppingListController', ShoppingListController);
    app.controller('ShoppingAddController', ShoppingAddController);
    app.service('ShoppingListService' , ShoppingListService);
    app.service('CheckShoppingItem' , CheckShoppingItem);

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

    ShoppingListService.$inject = ['$q', 'CheckShoppingItem'];
    function ShoppingListService($q, CheckShoppingItem){
        var service = this;
        var items = [];

        service.getItems = function(){
            return items;
        }

        service.addItem = function(name, quantity){
            var promise = CheckShoppingItem.checkItem(name, items);

            $q.all([promise]).then(function (response) {
                var item = {
                    name: name,
                    quantity: quantity
                };
                items.push(item);
            }).catch(function (errorResponse) {
                alert("Item already added in list");
            });
        };

        service.removeItem = function(itemIndex){
            items.splice(itemIndex, 1);
        }
    }

    CheckShoppingItem.$inject = ['$q', '$timeout'];
    function CheckShoppingItem($q, $timeout){
        var service = this;

        service.checkItem = function(name, itemList){
            var deferred = $q.defer();
            var result = { message : ""};

            $timeout(function(){
                var count = 0;
                for (var i=0; i < itemList.length; i++){
                    var item = itemList[i];
                    console.log(item.name+ " and " +name);
                    if(item.name === name) {
                        count+=1;
                        break;
                    }
                }
                if(count > 0){
                    result.message = "Item already added in list"
                    deferred.reject(result);
                }else{
                    deferred.resolve(result);
                }
            }, 3000);
            return deferred.promise;
        };
    }
})();
