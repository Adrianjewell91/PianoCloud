import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props)
  }



  render() {
    let NowPlayingUrl = "";
    if(this.props.nowPlaying){
      NowPlayingUrl = this.props.nowPlaying.track_recording;
    }

    return(
      <div className='footer'>
        <ReactAudioPlayer
          controls
          src={NowPlayingUrl}/>
        <button>Play</button>
      </div>
    );
  }

}

export default AudioPlayer;
