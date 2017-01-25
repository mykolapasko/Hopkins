(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

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
    controller: 'CategoriesController as categories',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Items page
  .state('detail', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/templates/categories-detail.template.html',
    controller: 'CategoryDetailController as detail',
    resolve: {
      items: ['MenuDataService', '$stateParams',
              function (MenuDataService, $stateParams) {
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  });
}

})();