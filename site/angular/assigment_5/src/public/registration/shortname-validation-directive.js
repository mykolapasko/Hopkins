(function () {

"use strict";

angular.module('public')
.directive('shortnameValidator', ShortnameValidator)
.service('ValidationService', ValidationService);

ValidationService.$inject = ['$http', 'ApiPath'];
function ValidationService($http, ApiPath) {
	var service = this;
	service.getShortName = function (shortName) {
		var config = {};
		if (shortName) {
			config.params = {'short_name': shortName};
		}
	};
}

ShortnameValidator.$inject = ['$http', 'ApiPath'];
function ShortnameValidator($http, ApiPath) {
  var ddo = {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$asyncValidators.dishExist = function(modelValue, viewValue) {
        return $http.get(ApiPath + '/menu_items.json')
          .then(function(response) {
            return response.data.menu_items;
          })
          .then(function(response) {
            response.some(function(currentValue) {
              console.log(currentValue.short_name === modelValue.toUpperCase());
              return currentValue.short_name === modelValue.toUpperCase();
            })
          });
      };
    }
  };

  return ddo;
}

})();