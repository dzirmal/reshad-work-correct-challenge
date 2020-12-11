import axiosInstance from '../../../axios/axios'
import requests from '../../../../helpers/requests'
import {
  CONNECTION_ERROR,
  MOVIES_LOADING,
  MOVIES_LOAD_ERROR,
  MOVIES_LOAD_SUCCESS,
} from '../..'

export const getMovies = (history) => (dispatch) => {
  dispatch({ type: MOVIES_LOADING })
  axiosInstance
    .get(requests.fetchMovies)
    .then((response) => {
      dispatch({ type: MOVIES_LOAD_SUCCESS, payload: response.data.results })
      // console.log('response.data.results', response.data.results)
    })
    .catch((error) => {
      dispatch({
        type: MOVIES_LOAD_ERROR,
        payload: error.response ? error.response.data : CONNECTION_ERROR,
      })
      // console.log('error', error)
    })
}
