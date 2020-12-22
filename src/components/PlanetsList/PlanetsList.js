import React, { useState } from 'react'
import { PlanetsListContainer } from './PlanetsList.elements'
import { LoadingSpinner, Planet } from '..'

const PlanetsList = ({ allPlanets }) => {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <PlanetsListContainer>
        {loading && allPlanets.length === 0 && <LoadingSpinner />}
        {allPlanets.map((planet, i) => (
          <Planet key={i} planet={planet} />
        ))}
      </PlanetsListContainer>
    </>
  )
}

export default PlanetsList
