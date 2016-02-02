main.controller('ModalSignupController', function ($scope, $modal) {
	  	$scope.open = function (size) {
	    	var modalInstance = $modal.open({
		      templateUrl: 'register.html',
		      controller: 'AuthController',
		      size: size,
		    });
	 	};
	});