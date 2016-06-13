var myAngularApp = angular.module('angularApp', []);
var  model = "Hellow World";

var list = {
            user: "User1",
            courses: [{ name: "HTML, CSS", passed: false },
                { name: "JavaScript Essential", passed: false },
                { name: "JavaScript Advanced", passed: false },
                { name: "HTML5 &amp; CSS3", passed: false },
                { name: "AngularJS", passed: false }]
        };

myAngularApp.controller('messageCtrl', function ($scope) {
	$scope.message = model;
	$scope.data = list;

	$scope.clickHandler = function() {
		
		if($scope.text === '') {
				$scope.message = model;
		} else {
			$scope.message = $scope.text;
		}
		$scope.text = '';
	};

	$scope.addTask = function () {
		
				$scope.data.courses.push({
				name: $scope.dataTask,
				passed: false
			});
	
		$scope.dataTask = '';
	}
	$scope.showText = function (passed) {
    return passed ? "Да" : "Нет";
  }

  $scope.setStyle = function (passed) {
      return passed ? "color:green" : "color:red; font-weight: bold";
  }
})