import { SEARCH_PLANETS } from '../..'

/* eslint-disable import/no-anonymous-default-export */
export default (searchText) => (dispatch) => {
  dispatch({ type: SEARCH_PLANETS, payload: searchText })
}
