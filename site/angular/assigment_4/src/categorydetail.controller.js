(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryDetailController', CategoryDetailController)
CategoryDetailController.$inject = ['items'];
	function CategoryDetailController(items) {
	  var detail = this;
	  detail.items = items.data;
	  console.log(items.data);
	}

})();