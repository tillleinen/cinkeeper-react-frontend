'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

require('styles/AboutItem.sass');

var AboutItem = React.createClass({

	composeClassString: function () {
		var classString = 'about-overview__item';	
		classString += ' ' + this.props.className;
		return classString;
	},

  render: function () {
    return (
        <li className={this.composeClassString()}>
      		<Link to="about">
      			<div className="about-overview__item__image" style={{'background-image': 'url(' + this.props.imageSrc + ')'}}></div>
                <div className="about-overview__item__overlay">
                    <div className="about-overview__item__overlay__caption">
                        {this.props.text}
                    </div>
                </div>
      		</Link>
      	</li>
      );
  }
});

module.exports = AboutItem; 

