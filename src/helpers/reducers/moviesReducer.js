import {
  ADD_MOVIE,
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

    case ADD_MOVIE: {
      // console.log('...state', ...state)
      // console.log('movies', movies)
      return {
        ...state,
        movies: {
          ...state.movies,
          loading: false,
          // data: payload,
          data: [...state.movies.data, payload],
        },
      }
    }

    default:
      return state
  }
}

export default movies
