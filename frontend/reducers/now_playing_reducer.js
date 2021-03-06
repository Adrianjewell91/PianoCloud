import {ADD_TRACK_TO_PLAY,
        PLAY_NEXT_TRACK} from "../actions/audio_player_actions";

const NowPlayingReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case ADD_TRACK_TO_PLAY:
      if ((state.length > 0) && (state[0].id === action.track.id)) {
        return state;
      } else {
        return [action.track, ...state];
      }
    case PLAY_NEXT_TRACK:

        return state.slice(1,state.length);

    default:
      return state;
  }
}

export default NowPlayingReducer;

//how exactly do I want to do this? When I press play I want to play the song.
//When A song finished, it should pop it off and play the next one.
//When there is a list of songs, and i press play, I should still play the song
//I just clicked, and what should happen to the other songs, how about push them
//back a bit.
