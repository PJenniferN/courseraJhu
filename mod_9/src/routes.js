(function () {
	'use strict'	
	
	angular.module("MenuApp")
	.config(RoutesConfig);
	
	RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"]
	function RoutesConfig($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");
		
		$stateProvider
		.state("home", {
			url: "/",
			templateUrl: "src/menuApp/templates/home.template.html"
		})
		
		.state("categories", {
			url: '/categories',
			templateUrl: "src/menuApp/templates/categoriesList.template.html",
			controller: 'CategoriesController as cat',
			resolve: {
				items: ['MenuDataService', function (Service) {
					return Service.getAllCategories();
				}]
			}
				
		})
		
		.state("items", {
			url: '/items/{catId}',
			templateUrl: "src/menuApp/templates/itemsList.template.html",
			controller: 'ItemsController as itemList',
			resolve: {
				items: ['MenuDataService', '$stateParams', function (Service, $stateParams) {
					return Service.getItemsForCategory($stateParams.catId);
				}]
			}
				
		})
	}
})();