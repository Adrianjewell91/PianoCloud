import React from 'react';
import {connect} from 'react-redux';
import UserPage from './user_page';

import {toArray} from "../../util/selectors";
import {requestUser, updateUserImage} from "../../actions/users_actions";

import {deleteTrack,
        requestUserTracks, updateTracks} from "../../actions/tracks_actions";

import {receiveTrackToPlay} from "../../actions/audio_player_actions";

//Will need to add ownProps to get history in order to search
const mapStateToProps = (state, ownProps) => {
  return {artist: toArray(state.entities.users),
          tracks: toArray(state.entities.tracks),
          currentUser: state.session.currentUser,
          nowPlaying: state.entities.nowPlaying[0],
          errors: state.errors.users}
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    // gonna need other stuff, here like, add song, delete song. All that stuff.
    requestUser: (username) => dispatch(requestUser(username)),
    updateUserImage: (user, id) => dispatch(updateUserImage(user,id)),
    deleteTrack: (id) => dispatch(deleteTrack(id)),
    updateTrack: (track) => dispatch(updateTrack(track)),
    requestUserTracks: (user_id) => dispatch(requestUserTracks(user_id)),
    receiveTrackToPlay: (track) => dispatch(receiveTrackToPlay(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
