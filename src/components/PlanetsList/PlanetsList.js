import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from '../../helpers/Provider'
import { getPlanets } from '../../helpers/actions/actionsTypes/getData/getPlanets'
import { PlanetsListContainer } from './PlanetsList.elements'
import { LoadingSpinner, Planet } from '..'
import axiosInstance from '../../helpers/axios/axios'

function PlanetsList() {
  const { planetsState, moviesState, planetsDispatch } = useContext(
    GlobalContext
  )
  const history = useHistory()

  const moviesPlanets = () => {
    moviesState.movies.data.map((planet) =>
      planet.planets.map((planetUrl) =>
        axiosInstance
          .get(planetUrl)
          .then((response) => console.log('response.data.name', response.data))
      )
    )
  }

  useEffect(() => {
    moviesPlanets()
  }, [])

  return (
    <PlanetsListContainer>
      {/* {loading === true && <LoadingSpinner />} */}
      <div>This is a list of movies' planets</div>
      <Planet moviesPlanets={moviesPlanets} />
    </PlanetsListContainer>
  )
}

export default PlanetsList
