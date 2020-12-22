import React from 'react'
import {
  MyMoviePlanetContainer,
  MyMoviesPlanetButton,
  MyMoviesPlanetRemoveImage,
  MyMoviesPlanetTitle,
} from './MyMoviePlanet.elements'

function MyMoviePlanet({ title }) {
  const removeMyMoviePlanets = () => {
    console.log('removeMyMoviePlanets was called')
  }

  return (
    <>
      <MyMoviePlanetContainer>
        <MyMoviesPlanetTitle>{title}</MyMoviesPlanetTitle>
        <MyMoviesPlanetButton onClick={removeMyMoviePlanets}>
          <MyMoviesPlanetRemoveImage src='Assets/Vector.svg' />
        </MyMoviesPlanetButton>
      </MyMoviePlanetContainer>
    </>
  )
}

export default MyMoviePlanet
