(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
.controller('MenuController', MenuController)
.component('categories', {
  templateUrl: 'src/templates/categories.template.html',
  bindings: {
    items: '<'
  }
});

// *** Router start ***
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig(stateProvider, urlRouterProvider) {
	// Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
  	url: '/',
  	templateUrl: 'src/templates/home.template.html'
  })

  // Categories page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'MenuController as menu',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  });

  // Category items page
  // .state('items', {
  //   url: '/items',
  //   templateUrl: 'src/templates/items.template.html',
  //   controller: ,
  //   resolve: {
  //     items: ['MenuDataService', function (MenuDataService) {
  //       return MenuDataService.getItemsForCategory(categoryShortName);
  //     }]
  //   }
  // })
}
// *** Router end ***

// *** Service start ***
MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });
    return response;
  };

  service.getItemsForCategory = function (shortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: shortName
      }
    });
    return response;
  };
}
// *** Service end ***


// *** Start of MenuController ***
MenuController.$inject = ['items'];
function MenuController(items) {
  var menu = this;
  menu.items = items;
}
// *** End of MenuController ***



})();