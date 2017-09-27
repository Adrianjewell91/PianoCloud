import React from 'react';
import { connect } from 'react-redux';

import AudioPlayer from './audio_player';

import {playNextTrack} from "../../actions/audio_player_actions";

const mapStateToProps = state => ({
  nowPlaying: state.entities.nowPlaying[0]
});

const mapDispatchToProps = dispatch => ({
  playNextTrack: () => dispatch(playNextTrack())
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);
