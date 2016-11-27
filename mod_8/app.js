(function () {
	'use strict'	
	
	angular.module("NarrowItDownApp", [])
	.controller("NarrowItDownController", NarrowItDownController)
	.service("MenuSearchService", MenuSearchService)
	.directive("foundItems", FoundItemsDirective);
	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
		var ctrl = this;
		
		ctrl.found = [];
		
		ctrl.onRemove = function(idx) {
			ctrl.found.splice(idx.index, 1);
		}
		
		ctrl.narrow = function() {
			var promise = MenuSearchService.getMatchedMenuItems(ctrl.search); 
			promise.then(function(list) {
				ctrl.found = list;
			});
		}
		
	}
	
	MenuSearchService.$inject = ['$http', '$q']
	function MenuSearchService($http, $q) {
		var service = this;
		
		service.getMatchedMenuItems = function(searchTerm) {
			var deffered = $q.defer()
			var url = "https://davids-restaurant.herokuapp.com/menu_items.json"
			var request = $http({
				method: "get",
				url: url
			});
			var foundItems = [];
			request.then(function (results){
				results.data.menu_items.forEach(function (result) {
					if (searchTerm != "" && result.description.toLowerCase().indexOf(searchTerm) !== -1) {
						foundItems.push(result);
					}
				});
				return deffered.resolve(foundItems);
			});
			
			return deffered.promise;
		}
		
	}
	
	function FoundItemsDirective() {
		var ddo = {
			templateUrl: 'foundItems.html',
			items: '<found',
			onRemove: '&',		
		}
		
		return ddo;
		
	}

	
})()