(function() {
  'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;

  var promise = MenuSearchService.getMatchedMenuItems();

  promise.then(function (response) {
    menu.items = response.data.menu_items;
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.")
  });
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function () {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
      var foundItems = [];
      result.data.menu_items.forEach(function (a){
        a.description.split(" ").forEach(function (b){
          console.log("a: ", a, "b: ", b);
          if (b === "chicken") {
            foundItems.push(a);
            console.log("foundItems: ", foundItems);
          }
        });
      });
      console.log(result.data.menu_items[0].description.split(" "));
      console.log(foundItems);
      return result;
    });
  }
}



})();