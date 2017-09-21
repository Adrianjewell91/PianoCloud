import * as TrackUtil from "../util/track_api_util.js";

export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const REMOVE_TRACKS = "REMOVE_TRACK";

export const RECEIVE_TRACK_ERRORS = "RECEIVE_TRACK_ERRORS";
export const REMOVE_TRACK_ERRORS = "REMOVE_TRACK_ERRORS";

export const receiveTrack  = (track) => ({
  type: RECEIVE_TRACKS,
  track
});

export const receiveTracks = (tracks) => ({
  type: RECEIVE_TRACKS,
  tracks
});

export const removeTrack = (id) => ({
  type: REMOVE_TRACK,
  trackId: id
});

//Thunks

export const requestTracks = () => (dispatch) => {
  return TrackUtil.getTracks()
    .then((tracks) => dispatch(receiveTracks(track)));
};

export const requestTrack = (id) => (dispatch) => {
  return TrackUtil.getTrack(id)
    .then((track) => dispatch(receiveTrack(track)));
};

export const createTrack = (track) => (dispatch) => {
  return TrackUtil.createTrack(track)
    .then((track) => dispatch(receiveTrack(track)));
}

export const updateTrack = (track) => (dispatch) => {
  return TrackUtil.createTrack(track)
    .then((track) => dispatch(receiveTrack(track)));
}

export const deleteTrack = (id) => (dispatch) => {
  return TrackUtil.deleteTrack(id)
    .then((id) => dispatch(removeTrack(id)));
};
