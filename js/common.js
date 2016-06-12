var myAngularApp = angular.module('angularApp', []);
var  model = "Hellow World";
myAngularApp.controller('messageCtrl', function ($scope) {
	$scope.message = model;

	$scope.clickHandler = function() {
		
		if($scope.text === '') {
				$scope.message = model;
		} else {
			$scope.message = $scope.text;
		}
		$scope.text = '';
	};

})