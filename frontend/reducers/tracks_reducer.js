import {
  RECEIVE_TRACKS,
  RECEIVE_TRACK,
  REMOVE_TRACK
} from '../actions/tracks_actions';

import merge from "lodash";

const TracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACKS:

      let allTracks = {};
      // debugger
      action.tracks.forEach((track) => allTracks[track.id] = track);
      return allTracks;
    case RECEIVE_TRACK:

      return Object.assign({}, state, {[action.track.id]: action.track});
    case REMOVE_TRACK:

      let newState = Object.assign({}, state);
      delete newState[`${action.trackId.id}`];
      return newState;
    default:
      return state;
  }
};

export default TracksReducer;

//I'm not being clear about what I want my state to look like when I navigate
//Between pages and when editing forms and stuff like that. When I update a song,
//Soundcloud stays on the page it was on, but
