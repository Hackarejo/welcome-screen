var app= angular.module('hackarejo', []);

app.controller('main-controller', function($scope, $window, $document) {
		
	$scope.pathRelative  = 'img/projection_logo.svg?' + new Date();
});