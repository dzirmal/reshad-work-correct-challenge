import { ADD_MOVIE } from '../..'

export const addMovies = (movie) => ({
  type: ADD_MOVIE,
  payload: { ...movie, episode_id: Math.random() },
})
