(function () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'src/templates/list-items.template.html',
  bindings: {
    items: '<'
  }
});

})();