(function () {
'use strict';

angular.module('Data')
.component('categories', {
  templateUrl: 'src/menuApp/templates/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();