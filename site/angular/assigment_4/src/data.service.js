(function () {
'use strict';

angular.module('data')
.service('DataService', DataService)

DataService.$inject = ['$http', 'ApiBasePath'];
function DataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });
    return response
      .then(function(response) {
        return response.data;
    });
  };

  service.getItemsForCategory = function (categoryShortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    });
    return response
      .then(function(response) {
        return response.data.menu_items;
    });
  };
}

})();