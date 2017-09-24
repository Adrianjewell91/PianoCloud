import { combineReducers } from 'redux';
import TracksReducer from './tracks_reducer';
import UsersReducer from './users_reducer';

const EntitiesReducer = combineReducers({
  tracks: TracksReducer,
  users: UsersReducer
});

export default EntitiesReducer;
