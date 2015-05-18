'use strict';

var React = require('react/addons');

var $ = require('jquery');

require('styles/LoadingIcon.sass');

var LoadingIcon = React.createClass({

	getInitialState: function () {
		return {
			height: 0
		};
	},

	componentWillMount: function () {
	    $(window).on('resize', this.setHeight);
	},

	componentDidMount: function () {
	    this.setHeight();
	},

	componentWillUnmount: function () {
	    $(window).off("resize", this.setHeight);
	},

    setHeight: function() {
        var bodyHeight = $(window).innerHeight();
        var headerHeight = $('header').outerHeight();
        var footerHeight = $('footer').outerHeight();
        var height = this.calcAvailableHeight(bodyHeight, headerHeight, footerHeight);
        this.setState({height: height});
    },

    calcAvailableHeight: function (bodyHeight, headerHeight, footerHeight) {
        return bodyHeight - (headerHeight + footerHeight);
    },

	render: function () {
		return (
		    <div className="loading-icon" style={{height: this.state.height + 'px'}}>
		    	<img className="loading-icon__image" src="../../images/loading.gif" />
		    </div>
		);
	}
});

module.exports = LoadingIcon; 

