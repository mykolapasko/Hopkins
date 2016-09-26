(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.message ="";
  $scope.input_string ="";

  $scope.displayMessage = function(){
  	var counter = getNumber($scope.input_string);
  	console.log("counter: ", counter);
  	if (counter === 0) {
	$scope.message = "Message_0";
	} else if (0 < counter && counter < 4) {
	$scope.message = "Message_1";
	} else {
	$scope.message = "Message_2";
	};

	function getNumber(str) {
		var myarray = str.split(", ");
		return (myarray === "" ) || (myarray[0] === str) ? 0 : str.split(", ").length
	};	
};
}); 
})();
