(function () {
"use strict";

angular.module('common')
.service('RegistrationService', RegistrationService);

RegistrationService.$inject = ['$http', 'ApiPath'];

function RegistrationService($http, ApiPath) {
  var service = this;
  service.users = [];

  service.getUserInfo = function () {
    return service.users.slice(-1)[0];
  };

  service.setUserInfo = function (userInfo) {
  	var new_user = {};
  	new_user.firstname = userInfo.firstname;
    new_user.lastname = userInfo.lastname;
  	new_user.email = userInfo.email;
  	new_user.phone = userInfo.phone;

    var promise = $http.get(ApiPath + '/menu_items.json')
    .then(function (response) {
      return response.data.menu_items;
    })
    .then(function (response) {
      return response.filter(function(currentValue) {
        return currentValue.short_name === userInfo.favorite.toUpperCase();
      });
    })
    .then(function(response) {
      new_user.favorite = response[0];
      service.users.push(new_user);
      console.log(new_user, service.users);
    });
    
  };

  service.isSubmited = function () {
    return service.users.length !== 0 ? false : true;
  };
  
}


})();
