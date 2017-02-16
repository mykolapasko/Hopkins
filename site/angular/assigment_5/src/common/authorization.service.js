(function () {
"use strict";

angular.module('common')
.service('AuthorizationService', AuthorizationService);

function AuthorizationService() {
  var service = this;

  service.getUserInfo = function () {
    return "Not Signed Up Yet. Sign up Now!";
  };

  service.setUserInfo = function () {
    return ;
  };
}

})();