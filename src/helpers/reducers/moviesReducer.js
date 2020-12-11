import {
  MOVIES_LOADING,
  MOVIES_LOAD_ERROR,
  MOVIES_LOAD_SUCCESS,
} from '../actions'

const movies = (state, { payload, type }) => {
  switch (type) {
    case MOVIES_LOADING: {
      return {
        ...state,
        movies: {
          ...state.movies,
          loading: true,
        },
      }
    }

    case MOVIES_LOAD_SUCCESS: {
      return {
        ...state,
        movies: {
          ...state.movies,
          loading: false,
          data: payload,
        },
      }
    }

    case MOVIES_LOAD_ERROR: {
      return {
        ...state,
        movies: {
          ...state.movies,
          loading: false,
          error: payload,
        },
      }
    }

    default:
      return state
  }
}

export default movies
