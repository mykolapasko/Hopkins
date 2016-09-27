(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController); 

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.input_string = "";

  $scope.displayMessage = function () {
  	var counter = getNumber($scope.input_string);
  	if (counter === 0) {
	$scope.message = "Please enter data first";
	} else if (0 < counter && counter < 4) {
	$scope.message = "Enjoy!";
	} else {
	$scope.message = "Too much!";
	};

	function getNumber(str) {
		var normalized = str.split(",").filter(function (a) {
		return (a !== " ") && (a !== "")
		});
	return (normalized[0] === str) ? 0 : normalized.length
	};	
};
};

})();


