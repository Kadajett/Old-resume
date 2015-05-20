'use strict';

describe('Service: sCViewService', function () {

  // load the service's module
  beforeEach(module('angularJsApp'));

  // instantiate service
  var sCViewService;
  beforeEach(inject(function (_sCViewService_) {
    sCViewService = _sCViewService_;
  }));

  it('should do something', function () {
    expect(!!sCViewService).toBe(true);
  });

});
