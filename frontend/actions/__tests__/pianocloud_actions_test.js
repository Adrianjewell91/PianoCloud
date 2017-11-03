// Require the files then test them.
import * as Actions from "../tracks_actions.js";
import * as TrackUtil from '../../util/track_api_util.js';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  test('requestUserTracks gets all tracks by User Id', () => {
    // expect(1).toEqual(2);

    const tracks = 'tracks go here';
    const testUserId = 1;

    const expectedActions = [
      {
        type: Actions.RECEIVE_TRACKS,
        tracks: tracks
      }
    ];

    TrackUtil.getUserTracks = jest.fn(() => {
      return Promise.resolve(tracks);
    });

    const store = mockStore({ tracks: {} });

    return store.dispatch(Actions.requestUserTracks(testUserId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
