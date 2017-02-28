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
  	new_user.username = userInfo.username;
  	new_user.email = userInfo.email;
  	new_user.phone = userInfo.phone;
  	service.users.push(new_user);
  };

  service.isSubmited = function () {
    return service.users.length !== 0 ? false : true;
  };


}


})();
