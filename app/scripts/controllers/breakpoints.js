'use strict';

/**
 * @ngdoc function
 * @name gridStuffApp.controller:BreakpointsCtrl
 * @description
 * # BreakpointsCtrl
 * Controller of the gridStuffApp
 */
angular.module('gridStuffApp')
  .controller('BreakpointsCtrl', function ($scope) {
    $scope.breakpoints = [
      {
      	minWidth: '0em',
      	maxWidth: '40em',
      	label: 'Small'
      },
      {
      	minWidth: '40.063em',
      	maxWidth: '64em',
      	label: 'Medium'
      },
      {
      	minWidth: '64.063em',
      	maxWidth: '90em',
      	label: 'Large'
      },
      {
      	minWidth: '90.063em',
      	maxWidth: '120em',
      	label: 'XLarge'
      },
      {
      	minWidth: '120.063em',
      	maxWidth: 'Infinite',
      	label: 'XXLarge'
      }
    ];
  });
