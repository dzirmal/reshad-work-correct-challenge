import React, { useContext, useEffect } from 'react'
import { Movie } from '..'
import { MovieListContainer } from './MovieList.elements'

import { useHistory } from 'react-router-dom'
import { getMovies } from '../../helpers/actions/actionsTypes/getData/getMovis'
import { GlobalContext } from '../../helpers/Provider'

function MovieList() {
  const { moviesDispatch, moviesState } = useContext(GlobalContext)
  const history = useHistory()

  useEffect(() => {
    getMovies(history)(moviesDispatch)
  }, [])

  return (
    <MovieListContainer>
      <Movie moviesState={moviesState} />
    </MovieListContainer>
  )
}

export default MovieList
