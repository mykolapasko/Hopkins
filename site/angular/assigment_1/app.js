(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.input_string = "";
  $scope.messageClass = "";
  $scope.borderClass = "";

  $scope.displayMessage = function () {
  	var counter = getNumber($scope.input_string);
  	if (counter === 0) {
      $scope.message = "Please enter data first";
      $scope.messageClass = "text-danger";
      $scope.borderClass = "has-error";
    	} else if (0 < counter && counter < 4) {
    	$scope.message = "Enjoy!";
      $scope.messageClass = "text-success";
      $scope.borderClass = "has-success";
    	} else {
    	$scope.message = "Too much!";
      $scope.messageClass = "text-success";
      $scope.borderClass = "has-success";
    };

	function getNumber(str) {
		var normalized = str.split(",").filter(function (a) {
		return (a !== " ") && (a !== "")
		});
	return normalized.length
	};
};
};
})();
