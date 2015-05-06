'use strict';

describe('Clients', function () {
  var React = require('react/addons');
  var Clients, component;

  beforeEach(function () {
    Clients = require('components/Clients.js');
    component = React.createElement(Clients);
  });

  it('should create a new instance of Clients', function () {
    expect(component).toBeDefined();
  });
});
