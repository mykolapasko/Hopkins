(function () {

angular.module('common',[]);

angular.module('common')
.controller('RegistrationController', RegistrationController);

function RegistrationController() {
  var reg = this;

  reg.submit = function () {
    reg.completed = true;
  };
}

})();