'use strict';

describe('Service: blogData', function () {

  // load the service's module
  beforeEach(module('angularJsApp'));

  // instantiate service
  var blogData;
  beforeEach(inject(function (_blogData_) {
    blogData = _blogData_;
  }));

  it('should do something', function () {
    expect(!!blogData).toBe(true);
  });

});
