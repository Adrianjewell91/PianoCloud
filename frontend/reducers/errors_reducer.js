import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import TrackErrorsReducer from './track_errors_reducer';
import UserErrorsReducer from './user_errors_reducer';

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  tracks: TrackErrorsReducer,
  users: UserErrorsReducer
});

export default ErrorsReducer;
