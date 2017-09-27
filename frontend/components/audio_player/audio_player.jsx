import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.handleEnd = this.handleEnd.bind(this);
  }

  handleEnd(e) {
    this.props.playNextTrack();
  }

  render() {
    let NowPlayingUrl = "";
    let NowPlayingStats = '';
    if(this.props.nowPlaying){
      NowPlayingUrl = this.props.nowPlaying.track_recording;

      NowPlayingStats = (
        <div className="now-playing-stats">
          <div className="now-playing-pic-frame">
            <img  className="now-playing-pic"
                  src={this.props.nowPlaying.thumb_nail_url}></img>
          </div>
          <div className="artist-and-title">
            <span id="artistNP">{this.props.nowPlaying.artist}</span>
            <span id="titleNP">{this.props.nowPlaying.title}</span>
          </div>
        </div>
      )
    }

    return(
      <div className='footer'>
        <ReactAudioPlayer className="react-audio-player"
          controls
          autoPlay
          src={NowPlayingUrl}
          onEnded={this.handleEnd}>

        </ReactAudioPlayer>

          {NowPlayingStats}


      </div>
    );
  }

}

export default AudioPlayer;
