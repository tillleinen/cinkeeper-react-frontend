'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

require('styles/AboutItem.sass');

var AboutItem = React.createClass({

	composeClassString: function () {
		var classString = 'about-overview__item';	
    classString += ' ' + this.props.className;
    classString += ' ' + (this.props.linkTo ? '' : 'has-no-link');
		return classString;
	},

  render: function () {
    var content = 
      <div>
        <div className="about-overview__item__image" style={{'background-image': 'url(' + this.props.imageSrc + ')'}}></div>
        <div className="about-overview__item__overlay">
            <div className="about-overview__item__overlay__caption">
                {this.props.linkTo ? this.props.text: ''}
            </div>
        </div>
      </div>;

    var link = this.props.linkTo ? <Link to={this.props.linkTo}>{content}</Link> : content;

    return (
      <li className={this.composeClassString()}>
    		{link}
    	</li>
    );
  }
});

module.exports = AboutItem; 

