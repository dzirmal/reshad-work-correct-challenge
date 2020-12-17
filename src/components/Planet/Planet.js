import React from 'react'

import {
  PlanetClimate,
  PlanetContainer,
  PlanetContent,
  PlanetDimeter,
  PlanetName,
  PlanetOrbitalPeriod,
  PlanetPopulation,
  PlanetRotationPeriod,
  PlanetSurfaceWater,
} from './Planet.elements'

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
        <PlanetContent>
          <PlanetName>{name}</PlanetName>
          <PlanetRotationPeriod>{rotation_period}</PlanetRotationPeriod>
          <PlanetOrbitalPeriod>{orbital_period}</PlanetOrbitalPeriod>
          <PlanetDimeter>{diameter}</PlanetDimeter>
          <PlanetClimate>{climate}</PlanetClimate>
          <PlanetSurfaceWater>{surface_water}</PlanetSurfaceWater>
          <PlanetPopulation>{population}</PlanetPopulation>
        </PlanetContent>
      </PlanetContainer>
    </>
  )
}

export default Planet
