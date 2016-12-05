(function () {
	'use strict'	
	
	angular.module("Data")
	.service("MenuDataService", MenuDataService);
	
	MenuDataService.$inject = ['$http', '$q']
	function MenuDataService($http) {
		var service = this;
		
		service.getAllCategories = function(){
			var url = "https://davids-restaurant.herokuapp.com/categories.json"
			return $http({
				method: "get",
				url: url
			});
		};
		
		service.getItemsForCategory = function(shortName) {
			var url = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + shortName;
			return $http({
				method: "get",
				url: url
			});
			
		};
	}
})();