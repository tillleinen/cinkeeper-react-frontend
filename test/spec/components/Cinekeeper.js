'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var Cinekeeper, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    Cinekeeper = require('components/Cinekeeper.js');
    component = React.createElement(Cinekeeper);
  });

  it('should create a new instance of Cinekeeper', function () {
    expect(component).toBeDefined();
  });
});
