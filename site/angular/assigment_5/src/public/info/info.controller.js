(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['userInfo', 'isSubmited'];
function InfoController(userInfo, isSubmited) {
  var $ctrl = this;
  $ctrl.userInfo = userInfo;
  $ctrl.isSubmited = isSubmited;
}


})();