import * as TrackUtil from "../util/track_api_util.js";

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";

export const RECEIVE_TRACK_ERRORS = "RECEIVE_TRACK_ERRORS";
export const CLEAR_TRACK_ERRORS = "REMOVE_TRACK_ERRORS";

export const receiveTracks = (tracks) => ({
  type: RECEIVE_TRACKS,
  tracks
});

export const receiveTrack  = (track) => ({
  type: RECEIVE_TRACK,
  track
});

export const removeTrack = (id) => ({
  type: REMOVE_TRACK,
  trackId: id
});

export const receiveTrackErrors = (errors) => ({
  type: RECEIVE_TRACK_ERRORS,
  errors
})

export const clearTrackErrors = ({
  type: CLEAR_TRACK_ERRORS
})

//Thunks

export const requestTracks = () => (dispatch) => {
  return TrackUtil.getTracks()
    .then((tracks) => dispatch(receiveTracks(tracks)))
    .fail((errors) => dispatch(receiveTrackErrors(errors)));
};

export const requestTrack = (id) => (dispatch) => {
  return TrackUtil.getTrack(id)
    .then((track) => dispatch(receiveTrack(track)));
};

export const createTrack = (track) => (dispatch) => {
  return TrackUtil.createTrack(track)
    .then((track) => dispatch(receiveTrack(track)))
    .fail((errors) => dispatch(receiveTrackErrors(errors)));
}

export const updateTrack = (track) => (dispatch) => {
  return TrackUtil.updateTrack(track)
    .then((track) => dispatch(receiveTrack(track)))
    .fail((errors) => dispatch(receiveTrackErrors(errors)));
}

export const deleteTrack = (id) => (dispatch) => {
  return TrackUtil.deleteTrack(id)
    .then((id) => dispatch(removeTrack(id)))
    .fail((errors) => dispatch(receiveTrackErrors(errors)));
};
