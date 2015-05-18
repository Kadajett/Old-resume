'use strict';

describe('Service: Git', function () {

  // load the service's module
  beforeEach(module('angularJsApp'));

  // instantiate service
  var Git;
  beforeEach(inject(function (_Git_) {
    Git = _Git_;
  }));

  it('should do something', function () {
    expect(!!Git).toBe(true);
  });

});
