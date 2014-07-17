'use strict';

angular.module('gridStuffApp')
.controller('BlockGridCtrl', function($scope) {
	$scope.images = [];
	for ( var i=0; i<20; i++) {
		$scope.images.push({url: 'http://www.investwithalex.com/wp-content/uploads/2013/08/Stock-Market-Drop.jpg'});
	}
});
