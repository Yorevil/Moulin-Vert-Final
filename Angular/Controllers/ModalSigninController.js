main.controller('ModalSigninController', function ($scope, $modal) {
	  	$scope.open = function (size) {
	    	var modalInstance = $modal.open({
		      templateUrl: 'login.html',
		      controller: 'AuthController',
		      size: size,
		    });
	 	};
	});
