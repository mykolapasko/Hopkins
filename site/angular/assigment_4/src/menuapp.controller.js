(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuController', MenuController)
MenuController.$inject = ['items'];
	function MenuController(items) {
	  var menu = this;
	  menu.items = items.data;
	  console.log("menu.items", menu.items)
	}

})();