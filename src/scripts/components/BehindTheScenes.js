'use strict';

var React = require('react/addons');

var BehindTheScenesItem = require('./BehindTheScenesItem.js');

var Request = require('../utils/Request.js');

require('styles/BehindTheScenes.sass');

var $ = require('jquery');
var _ = require('underscore');

var BehindTheScenes = React.createClass({

	getInitialState: function () {
		return {
			containerHeight: 0,
			width: 0,
			photos: []
		};
	},

	componentWillMount: function () {
		$(window).on('resize', this.handleResize);
	},

	componentWillUnmount: function () {
		$(window).off('resize', this.handleResize);
	},

	componentDidMount: function() {
		this.fetchData();
	},

	fetchData: function () {
		Request
			.get('/behind_the_scenes_photos')
			.end(this.handleResponse);
	},

	handleResponse: function (err, res) {
		if(err) {
			console.log(err);
		} else if(this.isMounted()) {
			var photos = JSON.parse(res.text).behind_the_scenes_photos;
			this.setState({
				photos: photos
			});
			this.handleResize();
		}
	},

	handleResize: function () {
		this.setState({
			width: this.calcTotalPhotoWidth(),
			containerHeight: $(this.getDOMNode()).height()
		});
	},

  calcTotalPhotoWidth: function (numRows) {
    return _.reduce(this.state.photos, function (sum, photo) {
      return sum + this.calcPhotoWidth(photo);
    }.bind(this), 0);
  },

  calcPhotoWidth: function (photo) {
    var availableHeight = this.state.containerHeight;
    var photoScale = availableHeight / photo.height;
    return Math.round(photo.width * photoScale);
  },

  render: function () {
    return (
      <div className="behindthescenes-gallery">
      	<ul className="behindthescenes-photo-list" style={{ 'width': this.state.width + 'px' }}>
      		{
      			this.state.photos.map(function (photo) {
      				return <BehindTheScenesItem imageSrc={photo.image.image.url} width={this.calcPhotoWidth(photo)} />;	  			
      			}.bind(this))
      		}
      	</ul>
      </div>
    );
  }
});

module.exports = BehindTheScenes; 

