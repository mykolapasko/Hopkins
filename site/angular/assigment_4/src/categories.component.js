(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/templates/list-categories.template.html',
  bindings: {
    items: '<'
  }
});

})();