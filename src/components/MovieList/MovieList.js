import React, { useContext } from 'react'
import { LoadingSpinner, Movie } from '..'
import { MovieListContainer } from './MovieList.elements'
import { GlobalContext } from '../../helpers/Provider'

function MovieList() {
  const { moviesState } = useContext(GlobalContext)

  const movies = moviesState.movies.data
  const loading = moviesState.movies.loading

  // console.log('loading:', loading)

  return (
    <>
      <MovieListContainer>
        {loading === true && <LoadingSpinner big />}

        {movies.map((movie) => (
          <Movie key={movie.episode_id} movie={movie} />
        ))}
      </MovieListContainer>
    </>
  )
}

export default MovieList
