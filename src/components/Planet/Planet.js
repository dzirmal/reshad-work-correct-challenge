import React from 'react'
import { PlanetContainer } from './Planet.elements'

function Planet({
  planet: {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    surface_water,
    population,
  },
}) {
  return (
    <>
      <PlanetContainer>
        <span>This is a planet component</span>
        <div key={name}>
          <span>{name}</span>
          <span>{rotation_period}</span>
          <span>{orbital_period}</span>
          <span>{diameter}</span>
          <span>{climate}</span>
          <span>{surface_water}</span>
          <span>{population}</span>
        </div>
      </PlanetContainer>
    </>
  )
}

export default Planet
