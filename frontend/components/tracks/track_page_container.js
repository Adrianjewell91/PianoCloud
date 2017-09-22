import React from 'react';
import {connect} from 'react-redux';

import {deleteTrack,
        requestTrack, updateTracks} from "../../actions/tracks_actions";

import {toArray} from "../../util/selectors";
import TrackPage from "./track_page";


const mapStateToProps = (state,ownProps) => {

  return {
    tracks: toArray(state.entities.tracks)
  };
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    deleteTrack: (id) => dispatch(deleteTrack(id)),
    updateTrack: (track) => dispatch(updateTrack(track)),
    requestTrack: (id) => dispatch(requestTrack(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackPage);