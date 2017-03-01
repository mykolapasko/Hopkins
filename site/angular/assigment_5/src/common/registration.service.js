(function () {
"use strict";

angular.module('common')
.service('RegistrationService', RegistrationService);

function RegistrationService() {
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
    new_user.favorite = userInfo.favorite;
  	service.users.push(new_user);
  };

  service.isSubmited = function () {
    return service.users.length !== 0 ? false : true;
  };
  
}


})();
