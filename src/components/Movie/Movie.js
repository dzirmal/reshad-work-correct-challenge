import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { MovieCategory, MovieHeader, PlanetsList } from '..'
import { getPlanets } from '../../helpers/actions/actionsTypes/getData/getPlanets'
import { GlobalContext } from '../../helpers/Provider'
import {
  MovieBody,
  MovieBodyContent,
  MovieBodyHeader,
  MovieContainer,
  MovieHeaderTitle,
  MovieHeaderButton,
} from './Movie.elements'

function Movie({ movie }) {
  const { planetsDispatch } = useContext(GlobalContext)
  const [open, setOpen] = useState(false)

  const history = useHistory()

  useEffect(() => {
    getPlanets(history)(planetsDispatch)
  }, [open])

  return (
    <>
      {/* {loading && data.length === 0 && <LoadingSpinner big />} */}

      {movie && (
        <MovieContainer>
          <MovieHeader title={movie.title} open={open} setOpen={setOpen} />

          {open && (
            <MovieBody>
              <MovieBodyHeader>
                <MovieCategory title='Planet Name' />
                <MovieCategory title='Rotation period' />
                <MovieCategory title='Orbital period' />
                <MovieCategory title='Diameter' />
                <MovieCategory title='Climate' />
                <MovieCategory title='Surface water' />
                <MovieCategory title='Population' />
              </MovieBodyHeader>

              <MovieBodyContent>
                <PlanetsList />
              </MovieBodyContent>
            </MovieBody>
          )}
        </MovieContainer>
      )}
    </>
  )
}

export default Movie
