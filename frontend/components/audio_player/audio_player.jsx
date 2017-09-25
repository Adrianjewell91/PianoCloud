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
        <ReactAudioPlayer className="react-audio-player"
          controls
          controlsList="nodownload"
          autoPlay
          src={NowPlayingUrl}>

        </ReactAudioPlayer>
      </div>
    );
  }

}

export default AudioPlayer;
