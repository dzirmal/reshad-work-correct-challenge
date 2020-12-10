import React from 'react'
import { LoadingSpinner, Movie } from '..'
import { MovieListContainer } from './MovieList.elements'

function MovieList() {
  return (
    <MovieListContainer>
      <LoadingSpinner />
      <Movie />
    </MovieListContainer>
  )
}

export default MovieList
