(function() {
    'use  strict';

    angular.module('App', [])
        .controller('ListController', ListController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', foundItems);

    function foundItems() {
        var ddo = {
            templateUrl: 'directive.html',
            item:'>',
        };
        return ddo;
    }

    ListController.$inject = ['MenuSearchService'];
    function ListController(MenuSearchService) {
        var menu = this;
        var found = [];
        var remove = [];
        //menu.getSelectedItem=function() {
        //    var promise = MenuSearchService.getMatchedMenuItems();
        //    promise.then(function (response) {
        //        var list = response.data;
        //        for (var i = 0; i < list.length; i++) {
        //            if (list[i].name.includes(menu.input)) {
        //                found.push(list[i]);
        //            }
        //        }
        //        menu.catogery = found;
        //        console.log(found);

        //    })
        //        .catch(function (error) {
        //            console.log("something went wrong.");
        //        });
        //}

        var promise = MenuSearchService.getMatchedMenuItems();
        promise.then(function(response) {
            menu.catogery = response.data;
            menu.getSelectedItem = function () {
                found = [];
                var list = response.data;
                for (var i = 0; i < list.length; i++) {
                    if (list[i].name.toUpperCase().includes(menu.input.toUpperCase())) {
                        found.push(list[i]);
                    }
                }
                if (found.length < 1 | menu.input===undefined) {
                    menu.nothingFound = true;
                } else {
                    menu.nothingFound = false;
                    menu.catogery = found;
                }
            };
            menu.removeItem = function (itemIndex) {
                found.splice(itemIndex, 1);
            };
        })
            .catch(function (error) {
                console.log("something went wrong.");
            });


    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service =this;

        service.getMatchedMenuItems = function (searchTerm) {
            var response = $http({
                method: 'GET',
                url: ('https://davids-restaurant.herokuapp.com/categories.json')
            });
            return response;
        };
    }

})();
