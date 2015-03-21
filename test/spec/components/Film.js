'use strict';

describe('Film', function () {
  var React = require('react/addons');
  var Film, component;

  beforeEach(function () {
    Film = require('components/Film.js');
    component = React.createElement(Film);
  });

  it('should create a new instance of Film', function () {
    expect(component).toBeDefined();
  });
});
