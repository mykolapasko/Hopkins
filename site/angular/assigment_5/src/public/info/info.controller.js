(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['userInfo', 'isSubmited', 'ApiPath'];
function InfoController(userInfo, isSubmited, ApiPath) {
  var $ctrl = this;
  $ctrl.userInfo = userInfo;
  $ctrl.isSubmited = isSubmited;
  $ctrl.basePath = ApiPath;
}


})();