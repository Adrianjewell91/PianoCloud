import {
  RECEIVE_TRACK,
  RECEIVE_TRACKS,
  REMOVE_TRACK
} from '../actions/tracks_actions';

import merge from "lodash";

const TracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACKS:

      let allTracks = {};
      action.tracks.forEach((track) => allTracks[track.id] = track);
      return allTracks;
    case RECEIVE_TRACK:

      return merge({}, state, { [action.track.id]: action.track } )
    case REMOVE_TRACK:

      let newState = {};
      newState = merge({}, state);
      delete newState[action.trackId];
      return newState;
    default:
      return state;
  }
};

export default TracksReducer;
