'use strict';

describe('Controller: BreakpointsCtrl', function () {

  // load the controller's module
  beforeEach(module('gridStuffApp'));

  var BreakpointsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BreakpointsCtrl = $controller('BreakpointsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
