(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['ApiPath', 'RegistrationService'];
function InfoController(RegistrationService, ApiPath) {
  var $ctrl = this;
  $ctrl.userInfo = userInfo;
  $ctrl.isSubmited = isSubmited;
  $ctrl.basePath = ApiPath;
}


})();