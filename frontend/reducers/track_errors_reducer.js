import {
  RECEIVE_TRACK,
  RECEIVE_TRACKS,
  RECEIVE_TRACK_ERRORS,
  REMOVE_TRACK,
  CLEAR_TRACK_ERRORS
} from '../actions/tracks_actions';

const TrackErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACK_ERRORS:
      const errors = action.errors.responseJSON.errors;
      return errors;

    case RECEIVE_TRACKS:
      return [];
    case RECEIVE_TRACK:
      return [];
    case REMOVE_TRACK:
      return [];
    case CLEAR_TRACK_ERRORS:
      return [];
    default:
      return state;
  }
};

export default TrackErrorsReducer;
