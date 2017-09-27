export const ADD_TRACK_TO_PLAY = "ADD_TRACK_TO_PLAY";
export const PLAY_NEXT_TRACK = "PLAY_NEXT_TRACK";

export const receiveTrackToPlay = (track) => ({
  type: ADD_TRACK_TO_PLAY,
  track
});

export const playNextTrack = () => ({
  type: PLAY_NEXT_TRACK
});
