import {
  CONNECTION_ERROR,
  PLANETS_LOADING,
  PLANETS_LOAD_ERROR,
  PLANETS_LOAD_SUCCESS,
} from '../..'
import axiosInstance from '../../../axios/axios'
import requests from '../../../../helpers/requests'

export const getPlanets = (history) => (dispatch) => {
  dispatch({ type: PLANETS_LOADING })
  axiosInstance
    .get(requests.fetchPlanets)
    .then((response) => {
      dispatch({ type: PLANETS_LOAD_SUCCESS, payload: response.data.results })

      console.log('response.data.results', response.data.results)
    })
    .catch((error) => {
      dispatch({
        type: PLANETS_LOAD_ERROR,
        payload: error.response ? error.response.data : CONNECTION_ERROR,
      })
      // console.log('error', error)
    })
}
