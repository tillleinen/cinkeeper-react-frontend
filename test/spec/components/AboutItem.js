'use strict';

describe('AboutItem', function () {
  var React = require('react/addons');
  var AboutItem, component;

  beforeEach(function () {
    AboutItem = require('components/AboutItem.js');
    component = React.createElement(AboutItem);
  });

  it('should create a new instance of AboutItem', function () {
    expect(component).toBeDefined();
  });
});
