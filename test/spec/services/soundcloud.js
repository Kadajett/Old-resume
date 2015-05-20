'use strict';

describe('Service: soundCloud', function () {

  // load the service's module
  beforeEach(module('angularJsApp'));

  // instantiate service
  var soundCloud;
  beforeEach(inject(function (_soundCloud_) {
    soundCloud = _soundCloud_;
  }));

  it('should do something', function () {
    expect(!!soundCloud).toBe(true);
  });

});
