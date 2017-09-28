import * as SearchUtil from "../util/search_api_util";

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const receiveSearchResults = (results) => ({
  type: RECEIVE_SEARCH_RESULTS,
  results
})

export const requestSearchResults = (query) => (dispatch) => {
  return SearchUtil.doSearch(query)
    .then((results) => dispatch(receiveSearchResults(results)));
}
