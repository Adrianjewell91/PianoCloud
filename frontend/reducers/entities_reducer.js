import { combineReducers } from 'redux';
import TracksReducer from './tracks_reducer';
import UsersReducer from './users_reducer';
import NowPlayingReducer from './now_playing_reducer';
import CommentsReducer from './comments_reducer';

const EntitiesReducer = combineReducers({
  tracks: TracksReducer,
  users: UsersReducer,
  comments: CommentsReducer,
  nowPlaying: NowPlayingReducer
});

export default EntitiesReducer;
