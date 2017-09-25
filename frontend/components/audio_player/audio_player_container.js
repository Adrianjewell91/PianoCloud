import React from 'react';
import { connect } from 'react-redux';

import AudioPlayer from './audio_player';

const mapStateToProps = state => ({
  nowPlaying: state.entities.now_playing[0]
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);
