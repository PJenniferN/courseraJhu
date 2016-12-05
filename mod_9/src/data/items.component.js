(function () {
'use strict';

angular.module('Data')
.component('items', {
  templateUrl: 'src/menuApp/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();