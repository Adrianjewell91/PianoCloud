import React from 'react';
import {connect} from 'react-redux';

import {deleteTrack,
        requestTrack, updateTracks} from "../../actions/tracks_actions";

import {receiveTrackToPlay} from '../../actions/audio_player_actions';

import {fetchComments, deleteComment} from '../../actions/comment_actions';

import {toArray} from "../../util/selectors";
import TrackPage from "./track_page";

import {nestComments} from "../../selectors/nest_comments";

const mapStateToProps = (state,ownProps) => {
  return {
    currentUser: state.session.currentUser,
    tracks: toArray(state.entities.tracks),
    comments: nestComments(state.entities.comments, 'id', 'parent_id'),
    nowPlaying: state.entities.nowPlaying[0]
  };
}

//How does the ui work?

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    deleteTrack: (id) => dispatch(deleteTrack(id)),
    updateTrack: (track) => dispatch(updateTrack(track)),
    requestTrack: (id) => dispatch(requestTrack(id)),
    receiveTrackToPlay: (track) => dispatch(receiveTrackToPlay(track)),
    fetchComments: (track_id) => dispatch(fetchComments(track_id)),
    deleteComment: (id) => dispatch(deleteComment(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackPage);
