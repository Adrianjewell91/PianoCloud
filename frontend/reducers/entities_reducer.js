import { combineReducers } from 'redux';
import TracksReducer from './tracks_reducer';
import UsersReducer from './users_reducer';
import NowPlayingReducer from './now_playing_reducer';

const EntitiesReducer = combineReducers({
  tracks: TracksReducer,
  users: UsersReducer,
  now_playing: NowPlayingReducer
});

export default EntitiesReducer;
