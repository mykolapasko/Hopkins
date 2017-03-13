(function () {

"use strict";

angular.module('public')
.directive('shortnameValidator', ShortnameValidator);

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