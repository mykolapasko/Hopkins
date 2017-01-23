(function () {
'use strict';

angular.module('MenuApp', ['ui.router'])
.config(function () {
  console.log("MenuApp config fired.");
})
.run(function () {
  console.log("MenuApp run fired.");
});

})();