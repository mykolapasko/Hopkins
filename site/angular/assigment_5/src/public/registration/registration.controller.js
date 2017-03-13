(function () {

"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['RegistrationService'];

function RegistrationController(RegistrationService) {
  var reg = this;

  reg.submit = function (user) {
    reg.completed = true;
    RegistrationService.setUserInfo(reg.user);
  };
}

})();
