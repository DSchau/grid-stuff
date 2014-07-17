'use strict';
angular.module('gridStuffApp')
.constant('small', 'only screen and (max-width: 40em')
.constant('medium', 'only screen and (min-width: 40.063em) and (max-width: 64em)')
.constant('large', 'only screen and (min-width: 64.063em) and (max-width: 90em)')
.constant('xlarge', 'only screen and (min-width: 90.063em) and (max-width: 120em)')
.constant('xxlarge', 'only screen and (min-width: 120.063em)')
.directive('windowSize', function($rootScope, matchmedia, small, medium, large, xlarge, xxlarge) {
  return {
    restrict: 'EA',
    template: '<h2 class="windowSize">{{ windowSize | getSize }}</h2>',
    replace: true,
    link: function() {

      matchmedia.on(small, function(queryList) {
        if ( queryList.matches ) {
          $rootScope.windowSize = 0;
        }
      });

      matchmedia.on(medium, function(queryList) {
        if ( queryList.matches ) {
          $rootScope.windowSize = 1;
        }
      });

      matchmedia.on(large, function(queryList) {
        if ( queryList.matches ) {
          $rootScope.windowSize = 2;
        }
      });

      matchmedia.on(xlarge, function(queryList) {
        if ( queryList.matches ) {
          $rootScope.windowSize = 3;
        }
      });

      matchmedia.on(xxlarge, function(queryList) {
        if ( queryList.matches ) {
          $rootScope.windowSize = 4;
        }
      });
    }
  };
});