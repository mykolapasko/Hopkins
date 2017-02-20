(function () {
"use strict";

angular.module('common')
.service('RegistrationService', RegistrationService);

function RegistrationService() {
  var service = this;
  service.users = [];

  service.getUserInfo = function () {
  	if (service.users.length === 0) {
  		return "Not Signed Up Yet. Sign up Now!";
  	} else {
  		return service.users[0];
  	}
    
  };


  service.setUserInfo = function (userInfo) {
  	var new_user = {};
  	new_user.username = userInfo.username;
  	new_user.email = userInfo.email;
  	new_user.phone = userInfo.phone;
  	console.log("service (new_user): ", new_user);
  	service.users.push(new_user);
  	console.log(service.users);
  };

};



})();
