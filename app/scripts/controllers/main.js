'use strict';

/**
 * @ngdoc function
 * @name gridStuffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gridStuffApp
 */
angular.module('gridStuffApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
