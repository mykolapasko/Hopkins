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

  promise.then(function (foundItems) {
    menu.found = foundItems;
    console.log("Im here");
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
    })
    .then(function (result) {
      var foundItems = [];
      result.data.menu_items.forEach(function (a){
        if (a.description.split(" ").some(function(b){
          return b === "chicken";
        })
          ) {
          foundItems.push(a);
          console.log(a.description);
        }
      });
      return foundItems;
    });
  }
}



})();