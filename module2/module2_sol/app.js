// author = "Shashant Panwar"

(function(){
    'use strict()';

    var app = angular.module('ShoppingListCheckOff', []);
    app.controller('ToBuyController', ToBuyController);
    app.controller('AlreadyBoughtController', AlreadyBoughtController);
    //app.service('ShoppingListCheckOffService' , ShoppingListCheckOffService);
    app.provider('ShoppingListCheckOffService', ShoppingListCheckOffServiceProvider);
    app.config(ShoppingConfig);

    //toBuy Ctrl decleration
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var toBuyCtrl = this;

        toBuyCtrl.toBuyList = ShoppingListCheckOffService.getToBuyItems();

        toBuyCtrl.removeItem = function(itemIndex){
            ShoppingListCheckOffService.removeItem(itemIndex);
        }
    }

    //alreadyBought Ctrl decleration
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var alreadyBoughtCtrl = this;

        alreadyBoughtCtrl.boughtList = ShoppingListCheckOffService.getAlreadyBought();

        alreadyBoughtCtrl.reloadPage = function(){
             window.location.reload(); 
        }
    }

    function ShoppingListCheckOffService(toBuyItems, alreadyBought){
        var service = this;

        service.getToBuyItems = function(){
            return toBuyItems;
        }

        service.removeItem = function(itemIndex){
            alreadyBought.push(toBuyItems[itemIndex]);
            toBuyItems.splice(itemIndex, 1);
        }

        service.getAlreadyBought = function(){
            return alreadyBought;
        }
    }

    //provide method which will inject Service along with service dependencies
    function ShoppingListCheckOffServiceProvider(){
        var provider = this;

        provider.default = [
            toBuyItems = {},
            alreadyBought = {}
        ];

        provider.$get = function(){
            return new ShoppingListCheckOffService(provider.default.toBuyItems, provider.default.alreadyBought);
        }
    }

    //application config method to bootstrap application services with required dependencies
    ShoppingConfig.$inject = ['ShoppingListCheckOffServiceProvider'];
    function ShoppingConfig(ShoppingListCheckOffServiceProvider){
        var toBuyItems = [
            { name: "Cookies", quantity: 10 },
            { name: "Juice", quantity: 6 },
            { name: "Salad", quantity: 2 },
            { name: "Chips", quantity: 5 },
            { name: "Water", quantity: 2 }
        ];
        var alreadyBought = [];

        ShoppingListCheckOffServiceProvider.default.toBuyItems = toBuyItems;
        ShoppingListCheckOffServiceProvider.default.alreadyBought = alreadyBought;
    }
})();
