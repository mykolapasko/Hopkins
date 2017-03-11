(function () {

"use strict";

angular.module('public')
.directive('shortnameValidator', ShortnameValidator)
//.service('ValidationService', ValidationService);

// ValidationService.$inject = ['$http', 'ApiPath'];
// function ValidationService($http, ApiPath) {
// 	var service = this;
// 	service.getShortName = function(shortName) {
// 		var config = {};
// 		if (shortName) {
// 			config.params = {'short_name': shortName};
// 		}
// 	};
// }

ShortnameValidator.$inject = ['$http', 'ApiPath', '$q'];
function ShortnameValidator($http, ApiPath, $q) {
  var ddo = {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$asyncValidators.shortnameValidator = function(modelValue, viewValue) {
        return $http.get(ApiPath + '/menu_items.json')
          .then(function(response) {
            return response.data.menu_items;
          })
          .then(function(response) {
            return response.some(function(currentValue) {
              return currentValue.short_name === modelValue.toUpperCase();
            });
          })
          .then(function(response) {
            if (!response) {
              return $q.reject();
            }
            return true;
          });
      };
    }
  };

  return ddo;
}

})();