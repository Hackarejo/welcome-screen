var app= angular.module('hackarejo', []);

app.controller('main-controller', function($scope, $window, $document) {
		
	$scope.pathRelative  = 'img/projection.svg?' + new Date();
});