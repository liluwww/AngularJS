(function() {
    'use strict';

    //var shoppingList = [
    //    {
    //        name: "milk",
    //        quantity: 1
    //    },
    //    {
    //        name: "coconut",
    //        quantity: 2
    //    },
    //    {
    //        name: "cookie",
    //        quantity: 8
    //    },
    //    {
    //        name: "shrimp",
    //        quantity: 12
    //    },
    //];
    //var boughtList=[];

    angular.module("App", [])
        .controller("ToBuyController", ToBuyController)
        .controller("BoughtController", BoughtController)
        .service('ListService', ListService);

    ToBuyController.$inject = ['ListService'];

    function ToBuyController(ListService) {
        var toBuy = this;
        toBuy.name = "myname";
        toBuy.quantity = "myquantity";
        toBuy.shoppingList = ListService.getToShopItem();
        toBuy.addItem = function() {
            ListService.addItem(toBuy.name, toBuy.quantity, toBuy.shoppingList);
        };
        toBuy.removeItem = function (itemIndex) {
            ListService.removeItem(itemIndex);
        };
    };

    BoughtController.$inject = ['ListService'];

    function BoughtController(ListService) {
        var bought = this;
        bought.boughtList = ListService.getBoughtItem();
    };

    function ListService() {
        var service = this;
        service.shoppingList = [
        {
            name: "milk",
            quantity: 1
        },
        {
            name: "coconut",
            quantity: 2
        },
        {
            name: "cookie",
            quantity: 8
        },
        {
            name: "shrimp",
            quantity: 12
        },
        ];
        service.boughtList = [];
        service.addItem = function (itemname, itemquantity, List) {
            var item = {
                name: itemname,
                quantity: itemquantity
            };
            List.push(item);
        };
        service.getToShopItem=function() {
            return service.shoppingList;
        }
        service.getBoughtItem = function() {
            return service.boughtList;
        }

        service.removeItem = function(itemIndex) {
            service.addItem(service.shoppingList[itemIndex].name, service.shoppingList[itemIndex].quantity, service.boughtList);
            service.shoppingList.splice(itemIndex, 1);

        }
}
})();
