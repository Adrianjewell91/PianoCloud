import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='footer'>
        <ReactAudioPlayer
          src = "https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/tracks/track_recordings/000/000/001/original/02-Impromptu-in-G-flat-major-D.-899.mp3"
          autoplay controls/>
      </div>
    );
  }

}

export default AudioPlayer;
