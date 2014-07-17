'use strict';

describe('Controller: VisibilityCtrl', function () {

  // load the controller's module
  beforeEach(module('gridStuffApp'));

  var VisibilityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VisibilityCtrl = $controller('VisibilityCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
