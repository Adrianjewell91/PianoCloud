import React from 'react';
import {connect} from 'react-redux';
import {toArray} from "../../util/selectors";
import SearchList from "./search_list";
import {receiveTrackToPlay} from "../../actions/audio_player_actions";
import {deleteTrack, updateTracks} from "../../actions/tracks_actions";



const mapStateToProps = state => {
  return {
    tracks: toArray(state.entities.tracks),
    users: toArray(state.entities.users),
    nowPlaying: state.entities.nowPlaying[0],
    currentUser: state.session.currentUser
  };
}

const mapDispatchToProps = dispatch => {
  return {
    receiveTrackToPlay: (track) => dispatch(receiveTrackToPlay(track)),
    deleteTrack: (id) => dispatch(deleteTrack(id)),
    updateTrack: (track) => dispatch(updateTrack(track))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchList);
