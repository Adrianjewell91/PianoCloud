import React from 'react';
import {connect} from 'react-redux';

import {deleteTrack,
        requestTracks, updateTracks} from "../../actions/tracks_actions";

import {receiveTrackToPlay} from "../../actions/audio_player_actions";

import {toArray} from "../../util/selectors";
import StreamPage from "./stream_page";

const mapStateToProps = state => {

  return {
    tracks: toArray(state.entities.tracks),
    currentUser: state.session.currentUser,
    nowPlaying: state.entities.nowPlaying[0]
  };
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTrack: (id) => dispatch(deleteTrack(id)),
    updateTrack: (track) => dispatch(updateTrack(track)),
    requestTracks: () => dispatch(requestTracks()),
    receiveTrackToPlay: (track) => dispatch(receiveTrackToPlay(track))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamPage);
