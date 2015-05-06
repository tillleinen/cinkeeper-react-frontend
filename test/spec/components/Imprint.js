'use strict';

describe('Imprint', function () {
  var React = require('react/addons');
  var Imprint, component;

  beforeEach(function () {
    Imprint = require('components/Imprint.js');
    component = React.createElement(Imprint);
  });

  it('should create a new instance of Imprint', function () {
    expect(component).toBeDefined();
  });
});
