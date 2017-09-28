import {
  RECEIVE_TRACKS,
  RECEIVE_TRACK,
  REMOVE_TRACK
} from '../actions/tracks_actions';

import {RECEIVE_SEARCH_RESULTS} from "../actions/search_actions";

import {RECEIVE_USER} from '../actions/users_actions';
//I want to do some track clearing during RECEIVE_USER so that tracks are only in the
//nested region of user - how can I not do this?

const TracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACKS:

      let allTracks = {};
      action.tracks.forEach((track) => allTracks[track.id] = track);
      return allTracks;
    case RECEIVE_TRACK:

      return {[action.track.id]: action.track};
    case REMOVE_TRACK:

      let newState = Object.assign({}, state);
      delete newState[`${action.trackId.id}`];
      return newState;
    case RECEIVE_USER:
      return {};
    case RECEIVE_SEARCH_RESULTS:
      debugger
      allTracks = {};
      action.results.tracks.forEach((track) => allTracks[track.id] = track);
      return allTracks;
    default:
      return state;
  }
};

export default TracksReducer;
