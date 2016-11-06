(function () {
	'use strict'	
	
	angular.module("LunchCheck", [])
	.controller("LunchCheckController", LunchCheckController);
	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {
		$scope.list = "";
		$scope.message = "";
		$scope.borderColor = "";
		$scope.messageColor = "";
		$scope.calcEat = function() {
			if ($scope.list === "") {
				$scope.message = "Please enter data first";
				$scope.borderColor = "borderRed";
				$scope.messageColor = "red";
			}
			else if (numItemsInString($scope.list) > 3) {
				$scope.message = "To Much!";
				$scope.borderColor = "borderGreen";
				$scope.messageColor = "green";
			} else {
				$scope.message = "Enjoy!";
				$scope.borderColor = "borderGreen";
				$scope.messageColor = "green";
			}
		}
	}
	
	function numItemsInString(myString) {
		var stringArray = myString.split(',');
		var filteredArray = stringArray.filter(function(item) {
			return item.trim() != "";
		});
		return filteredArray.length;
	}
	
})()