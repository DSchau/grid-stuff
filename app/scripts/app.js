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
    .otherwise({
      redirectTo: '/'
    });
})
.controller('AppCtrl', function($scope, navContent, sizesObj) {
  $scope.navContent = navContent;
  $scope.sizesObj = sizesObj;
});
