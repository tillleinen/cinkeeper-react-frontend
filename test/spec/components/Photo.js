'use strict';

describe('Photo', function () {
  var React = require('react/addons');
  var Photo, component;

  beforeEach(function () {
    Photo = require('components/Photo.js');
    component = React.createElement(Photo);
  });

  it('should create a new instance of Photo', function () {
    expect(component).toBeDefined();
  });
});
