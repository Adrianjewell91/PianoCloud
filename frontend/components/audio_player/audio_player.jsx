import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  handleEnd(e) {
    this.props.playNextTrack();
  }

  handlePause(e) {
    //find the item that was playing and set it the pause.
  }

  handlePlay (e) {
    //find the item that was paused and set it to playing.
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
        <ReactAudioPlayer
          controls
          autoPlay
          src={NowPlayingUrl}
          onEnded={this.handleEnd.bind(this)}
          onPause={this.handlePause.bind(this)}
          onPlay={this.handlePlay.bind(this)}>
        </ReactAudioPlayer>

          {NowPlayingStats}


      </div>
    );
  }

}

export default AudioPlayer;
