import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { LoadingSpinner, MovieCategory, MovieHeader, PlanetsList } from '..'
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

import axios from 'axios'

function Movie({ movie }) {
  // const { planetsDispatch } = useContext(GlobalContext)
  const [open, setOpen] = useState(false)
  const [allPlanets, setAllPlanets] = useState([])
  // const [loading, setLoading] = useState(true)

  const history = useHistory()

  const moviesPlanets = () => {
    // setLoading(true)
    // console.log('loading:', loading)

    movie.planets.map((planetUrl) => {
      // setLoading(true)
      // console.log('loading:', loading)

      return axios
        .get(planetUrl)
        .then((response) =>
          setAllPlanets((previousPlanets) => [
            ...previousPlanets,
            response.data,
          ])
        )
    })
    // setLoading(false)
  }

  useEffect(() => {
    if (open && allPlanets.length === 0) {
      moviesPlanets()
    }
  }, [open])

  // useEffect(() => {
  //   getPlanets(history)(planetsDispatch)
  // }, [open])

  // console.log('loading:', loading)

  return (
    <>
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
                {/* {loading ? ( */}
                {/* <LoadingSpinner />
                ) : ( */}
                <PlanetsList
                  movieId={movie.episode_id}
                  movie={movie}
                  allPlanets={allPlanets}
                  setAllPlanets={setAllPlanets}
                />
                {/* )} */}
              </MovieBodyContent>
            </MovieBody>
          )}
        </MovieContainer>
      )}
    </>
  )
}

export default Movie
