(function () {
	
	angular.module('public')
	.controller('SignUpController', SignUpController);
	
	function SignUpController() {
	  var sign = this;
	
	  sign.submit = function () {
	    sign.completed = true;
	  };
	}

})();