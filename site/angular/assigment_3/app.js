(function() {
  'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/")
.directive('foundItems', FoundItems);

function FoundItems() {
  var ddo = {
    templateUrl : 'foundItems.html'
  };
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.searchTerm = "";


  menu.getMatchedMenuItems = function(searchTerm) {
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
    promise.then(function (foundItems) {
      menu.found = foundItems;
    })
  }

  menu.removeItem = function(index) {
    menu.found.splice(index, 1);
  }
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
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
        }
      });
      return foundItems;
    });
  }
}



})();