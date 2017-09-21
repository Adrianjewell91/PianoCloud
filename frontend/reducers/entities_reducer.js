import { combineReducers } from 'redux';
import TracksReducer from './tracks_reducer';

const EntitiesReducer = combineReducers({
  tracks: TracksReducer
});

export default TracksReducer;
