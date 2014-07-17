'use strict';

/**
 * @ngdoc function
 * @name gridStuffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gridStuffApp
 */
angular.module('gridStuffApp')
.controller('MainCtrl', function ($scope, modal) {
	$scope.open = modal.open('views/modal/main.html', 'Source Code', 'ModalMainCtrl');
})
.controller('ModalMainCtrl', function() {

});
