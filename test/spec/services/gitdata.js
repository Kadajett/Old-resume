'use strict';

describe('Service: gitData', function () {

  // load the service's module
  beforeEach(module('angularJsApp'));

  // instantiate service
  var gitData;
  beforeEach(inject(function (_gitData_) {
    gitData = _gitData_;
  }));

  it('should do something', function () {
    expect(!!gitData).toBe(true);
  });

});
