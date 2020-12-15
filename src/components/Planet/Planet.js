import React, { useContext } from 'react'
import { GlobalContext } from '../../helpers/Provider'
import { PlanetContainer } from './Planet.elements'

function Planet({
  moviesPlanets,
  // : {
  //   name,
  //   rotation_period,
  //   orbital_period,
  //   diameter,
  //   climate,
  //   surface_water,
  //   population,
  // },
}) {
  // const { moviesState, moviesDispatch } = useContext(GlobalContext)

  // const loading = moviesState.movies.loading

  // console.log('loading', loading)

  // const history = useHistory()

  // useEffect(() => {
  //   getMovies(history)(moviesDispatch)
  // }, [])

  // console.log('moviesPlanets:', moviesPlanets)

  return (
    <>
      {' '}
      {/* {loading && data.length === 0 && <LoadingSpinner big />} */}
      <PlanetContainer>
        <span>this is the planet name</span>
        {/* <div>
          <span>{name}</span>
          <span>{rotation_period}</span>
          <span>{orbital_period}</span>
          <span>{diameter}</span>
          <span>{climate}</span>
          <span>{surface_water}</span>
          <span>{population}</span>
        </div> */}
      </PlanetContainer>
    </>
  )
}

export default Planet
