(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesDetail', {
  templateUrl: 'src/templates/list-categories-detail.template.html',
  bindings: {
    items: '<'
  }
});

})();