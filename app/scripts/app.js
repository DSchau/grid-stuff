'use strict';
angular.module('gridStuffApp', [
  'rc',
  'ngRoute',
  'matchmedia-ng'
])
.constant('navContent', [
  {
    label: 'Home',
    url: '#/'
  },
  {
    label: 'Breakpoints',
    url: '#/breakpoints'
  },
  {
    label: 'Demos',
    sub: [
      {
        label: 'Basic Grid',
        url: '#/'
      },
      {
        label: 'Nested Grid',
        url: '#/nested'
      },
      {
        label: 'Forms',
        url: '#/forms'
      },
      {
        label: 'Visibility',
        url: '#/visibility'
      },
      {
        label: 'Block Grid',
        url: '#/block'
      }
    ]
  }
])
.constant('sizesObj', {
  'Small': 0,
  'Medium': 1,
  'Large': 2,
  'X-Large': 3,
  'XX-Large': 4
})
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/forms', {
      templateUrl: 'views/forms.html',
      controller: 'FormCtrl'
    })
    .when('/nested', {
      templateUrl: 'views/nested.html',
      controller: 'NestedCtrl'
    })
    .when('/breakpoints', {
      templateUrl: 'views/breakpoints.html',
      controller: 'BreakpointsCtrl'
    })
    .when('/visibility', {
      templateUrl: 'views/visibility.html',
      controller: 'VisibilityCtrl'
    })
    .when('/block', {
      templateUrl: 'views/blockGrid.html',
      controller: 'BlockGridCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
})
.controller('AppCtrl', function($scope, $location, navContent, sizesObj, modal) {
  $scope.navContent = navContent;
  $scope.sizesObj = sizesObj;

  var upper = function(input) {
    return input.substr(0, 1).toUpperCase() + input.substr(1);
  };

  $scope.path = $location.path().substr(1);

  $scope.$on('$routeChangeSuccess', function() {
    $scope.path = $location.path().substr(1);

    $scope.open = modal.open('/views/modal/' + ($scope.path || 'main') + '.html', 'Source Code', 'ModalCtrl');
  });

  $scope.open = modal.open('/views/modal/' + ($scope.path || 'main') + '.html', 'Source Code', 'ModalCtrl');
})
.controller('ModalCtrl', function() {

});
