import React from 'react';
import {connect} from 'react-redux';

import {deleteTrack,
        requestTracks, updateTracks} from "../../actions/tracks_actions";

import {toArray} from "../../util/selectors";
import StreamPage from "./stream_page";

const mapStateToProps = state => {
  console.log(state);
  return {
    tracks: toArray(state.entities.tracks)
  };
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTrack: (id) => dispatch(deleteTrack(id)),
    updateTrack: (track) => dispatch(updateTrack(track)),
    requestTracks: () => dispatch(requestTracks())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamPage);
