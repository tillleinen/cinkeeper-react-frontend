'use strict';

var React = require('react/addons');

var Request = require('../utils/Request.js');

var FullscreenVideo = require('./FullscreenVideo.js');
var LoadingIcon = require('./LoadingIcon.js');

require('styles/Home.sass');

var Home = React.createClass({
    getInitialState: function () {
        return {
            home_videos: []
        };
    },
    componentDidMount: function() {
        this.fetchData();
    },
    fetchData: function () {
        Request
            .get('/home_videos')
            .end(this.handleResponse);
    },
    handleResponse: function (err, res) {
        if(err) {
            console.log(err);
        } else if(this.isMounted()) {
            var home_videos = JSON.parse(res.text).home_videos;
            this.setState({
                home_videos: home_videos
            });
        }
    },

  render: function () {
    var videoSources = [];

    if(this.state.home_videos.length > 0) {
        videoSources = [
          {
            src: this.state.home_videos[0].webm_url,
            type: 'video/webm'
          },
          {
            src: this.state.home_videos[0].mp4_url,
            type: 'video/mp4'
          }
        ];
    }

    return (
      <div className="home">
        <LoadingIcon/>;
        <FullscreenVideo className="home__video" videoSources={videoSources} width={1920} height={814} />
      </div>
    );
  }
});

module.exports = Home;
