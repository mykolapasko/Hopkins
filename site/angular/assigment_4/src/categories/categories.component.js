(function () {
'use strict';

angular.module('data')
.component('categories', {
  templateUrl: 'src/templates/list-categories.template.html',
  bindings: {
    items: '<'
  }
});

})();