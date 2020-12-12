import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from '../../helpers/Provider'
import { getPlanets } from '../../helpers/actions/actionsTypes/getData/getPlanets'
import { PlanetsListContainer } from './PlanetsList.elements'
import { LoadingSpinner, Planet } from '..'

function PlanetsList() {
  const { planetsState, moviesState } = useContext(GlobalContext)

  const moviesPlanets = moviesState.movies.data.map((planet) =>
    planet.planets.map((el) => el.name)
  )

  // const moviesPlanetsName = planetsState.planets.data.map(
  //   (planet) => planet.name
  // )

  const moviesPlanetsUrl = planetsState.planets.data.map((planet) => planet.url)

  console.log('moviesPlanets:', moviesPlanets)
  // console.log('moviesPlanetsName:', moviesPlanetsName)
  console.log('moviesPlanetsUrl:', moviesPlanetsUrl)

  return (
    <PlanetsListContainer>
      {/* {loading === true && <LoadingSpinner />} */}
      <div>This is a list of movies' planets</div>
    </PlanetsListContainer>
  )
}

export default PlanetsList
