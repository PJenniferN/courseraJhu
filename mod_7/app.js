(function () {
	'use strict'	
	
	angular.module("ShoppingListCheckOff", [])
	.controller("ToBuyController", ToBuyController)
	.controller("AlreadyBoughtController", AlreadyBoughtController)
	.service("ShoppingListCheckOffService", ShoppingListCheckOffService);
	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var buy = this;
		buy.listToBuy = ShoppingListCheckOffService.getBuyItems();
		
		buy.setBought = function(idx) {
			ShoppingListCheckOffService.buyItem(idx);
		}
	}
	
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var bought = this
		bought.listBought = ShoppingListCheckOffService.getBoughtItems();
	}
	
	function ShoppingListCheckOffService() {
		var service = this;
		var buyItems = [{ item: 'carrots', quant: '1 pound'}, {item: 'celery', quant: '1 stalk'},
		                {item: 'potatos', quant: '5'}, {item: 'tomatos', quant: '3'},
		                {item: 'peppers', quant: '4'}];
		var boughtItems = [];
		
		service.buyItem = function(idx) {
			var item = buyItems[idx];
			buyItems.splice(idx, 1);
			boughtItems.push(item);
		};
		
		service.getBuyItems = function() {
			return buyItems;
		};
		
		service.getBoughtItems = function() {
			return boughtItems;
		}
		
	}
	
})()