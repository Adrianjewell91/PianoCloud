import React from 'react';
import {connect} from 'react-redux';
import {toArray} from "../../util/selectors";
import SearchList from "./search_list";
import {receiveTrackToPlay} from "../../actions/audio_player_actions";

const mapStateToProps = state => {
  return {
    tracks: toArray(state.entities.tracks),
    users: toArray(state.entities.users)
  };
}

const mapDispatchToProps = dispatch => {
  return {
    receiveTrackToPlay: (track) => dispatch(receiveTrackToPlay(track))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchList);
