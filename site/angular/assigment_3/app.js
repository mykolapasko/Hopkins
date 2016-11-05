(function() {
  'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.searchTerm = "";

  menu.getMatchedMenuItems = function(searchTerm) {
    console.log("searchTerm", searchTerm)
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
    promise.then(function (foundItems) {
      menu.found = foundItems;
    })
  }
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    console.log("searchTerm", searchTerm)
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    })
    .then(function (result) {
      var foundItems = [];
      result.data.menu_items.forEach(function (a){
        if (a.description.split(" ").some(function(b){
          return b === searchTerm;
        }) && searchTerm !== "") {
          foundItems.push(a);
          console.log(a.description);
        }
      });
      return foundItems;
    });
  }
}



})();