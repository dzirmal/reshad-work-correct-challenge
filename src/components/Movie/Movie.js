import React, { useEffect, useState } from 'react'
import { MovieHeader, PlanetsList } from '..'
import {
  MovieBody,
  MovieBodyContent,
  MovieBodyHeader,
  MovieContainer,
  ArrowUp,
  ArrowDown,
  ArrowsDiv,
} from './Movie.elements'

import axios from 'axios'
import {
  PlanetClimate,
  PlanetDimeter,
  PlanetName,
  PlanetOrbitalPeriod,
  PlanetPopulation,
  PlanetRotationPeriod,
  PlanetSurfaceWater,
} from '../Planet/Planet.elements'

function Movie({ movie }) {
  const [open, setOpen] = useState(false)
  const [allPlanets, setAllPlanets] = useState([])
  const [PlanetsNames, setPlanetsNames] = useState([])

  const getMoviePlanets = () => {
    movie.planets.map((planetUrl) => {
      return axios.get(planetUrl).then((response) => {
        setAllPlanets((previousPlanets) => [...previousPlanets, response.data])
      })
    })
  }

  // console.log('PlanetsNames:', PlanetsNames)

  useEffect(() => {
    if (open && allPlanets.length === 0) {
      getMoviePlanets()
    }
  }, [open])

  // console.log('allPlanets:', allPlanets)

  const ascendingByName = () => {
    const ascending = allPlanets.sort((a, b) => {
      const aName = a.name.toLowerCase()
      const bName = b.name.toLowerCase()
      if (aName < bName) return -1
      if (aName > bName) return 1
      return 0
    })
    console.log('ascending:', ascending)
    setAllPlanets((previousPlanets) => [...previousPlanets, ascending])
  }

  const descendingByName = () => {
    const descending = allPlanets.sort((a, b) => {
      console.log('a.name', a.name)
      console.log('b.name', b.name)
      const aName = a.name.toLowerCase()
      const bName = b.name.toLowerCase()
      if (aName > bName) return -1
      if (aName < bName) return 1
      return 0
    })
    console.log('descending:', descending)

    setAllPlanets((previousPlanets) => [...previousPlanets, descending])
  }

  const ascendingByRotationPeriod = () => {
    const ascending = allPlanets.sort(
      (a, b) => a.rotation_period - b.rotation_period
    )
    setAllPlanets((previousPlanets) => [...previousPlanets, ascending])
  }

  const descendingByRotationPeriod = () => {
    const descending = allPlanets.sort(
      (a, b) => b.rotation_period - a.rotation_period
    )
    setAllPlanets((previousPlanets) => [...previousPlanets, descending])
  }

  const ascendingByOrbitalPeriod = () => {
    const ascending = allPlanets.sort(
      (a, b) => a.orbital_period - b.orbital_period
    )
    setAllPlanets((previousPlanets) => [...previousPlanets, ascending])
  }

  const descendingByOrbitalPeriod = () => {
    const descending = allPlanets.sort(
      (a, b) => b.orbital_period - a.orbital_period
    )
    setAllPlanets((previousPlanets) => [...previousPlanets, descending])
  }

  const ascendingByDiameter = () => {
    const ascending = allPlanets.sort((a, b) => a.diameter - b.diameter)
    setAllPlanets((previousPlanets) => [...previousPlanets, ascending])
  }

  const descendingByDiameter = () => {
    console.log('sortingDecreasing was clicked')
    const descending = allPlanets.sort((a, b) => b.diameter - a.diameter)
    setAllPlanets((previousPlanets) => [...previousPlanets, descending])
  }

  const ascendingByClimate = () => {
    const ascending = allPlanets.sort((a, b) => {
      const aName = a.climate.toLowerCase()
      const bName = b.climate.toLowerCase()

      console.log('a.climate', a.climate)
      console.log('b.climate', b.climate)

      if (aName < bName) return -1
      if (aName > bName) return 1
      return 0
    })

    setAllPlanets((previousPlanets) => [...previousPlanets, ascending])
  }

  const descendingByClimate = () => {
    const descending = allPlanets.sort((a, b) => {
      console.log('a.climate', a.climate)
      console.log('b.climate', b.climate)
      const aName = a.climate.toLowerCase()
      const bName = b.climate.toLowerCase()

      console.log('a.climate', a.climate)
      console.log('b.climate', b.climate)

      if (aName > bName) return -1
      if (aName < bName) return 1
      return 0
    })
    setAllPlanets((previousPlanets) => [...previousPlanets, descending])
    console.log('allPlanets:', allPlanets)
  }

  const ascendingBySurfaceWater = () => {
    const ascending = allPlanets.sort(
      (a, b) => a.surface_water - b.surface_water
    )
    setAllPlanets((previousPlanets) => [...previousPlanets, ascending])
  }

  const descendingBySurfaceWater = () => {
    const descending = allPlanets.sort(
      (a, b) => b.surface_water - a.surface_water
    )
    setAllPlanets((previousPlanets) => [...previousPlanets, descending])
  }

  const ascendingByPopulation = () => {
    const ascending = allPlanets.sort((a, b) => a.population - b.population)
    setAllPlanets((previousPlanets) => [...previousPlanets, ascending])
  }

  const descendingByPopulation = () => {
    const descending = allPlanets.sort((a, b) => b.population - a.population)
    setAllPlanets((previousPlanets) => [...previousPlanets, descending])
  }

  return (
    <>
      {movie && (
        <MovieContainer>
          <MovieHeader title={movie.title} open={open} setOpen={setOpen} />

          {open && (
            <MovieBody>
              <MovieBodyHeader>
                <PlanetName>
                  Planet Name
                  <ArrowsDiv>
                    <ArrowUp onClick={ascendingByName}>&#9650;</ArrowUp>
                    <ArrowDown onClick={descendingByName}>&#9660;</ArrowDown>
                  </ArrowsDiv>
                </PlanetName>
                <PlanetRotationPeriod>
                  Rotation period
                  <ArrowsDiv>
                    <ArrowUp onClick={ascendingByRotationPeriod}>
                      &#9650;
                    </ArrowUp>
                    <ArrowDown onClick={descendingByRotationPeriod}>
                      &#9660;
                    </ArrowDown>
                  </ArrowsDiv>
                </PlanetRotationPeriod>
                <PlanetOrbitalPeriod>
                  orbital_period
                  <ArrowsDiv>
                    <ArrowUp onClick={ascendingByOrbitalPeriod}>
                      &#9650;
                    </ArrowUp>
                    <ArrowDown onClick={descendingByOrbitalPeriod}>
                      &#9660;
                    </ArrowDown>
                  </ArrowsDiv>
                </PlanetOrbitalPeriod>
                <PlanetDimeter>
                  diameter
                  <ArrowsDiv>
                    <ArrowUp onClick={ascendingByDiameter}>&#9650;</ArrowUp>
                    <ArrowDown onClick={descendingByDiameter}>
                      &#9660;
                    </ArrowDown>
                  </ArrowsDiv>
                </PlanetDimeter>
                <PlanetClimate>
                  climate
                  <ArrowsDiv>
                    <ArrowUp onClick={ascendingByClimate}>&#9650;</ArrowUp>
                    <ArrowDown onClick={descendingByClimate}>&#9660;</ArrowDown>
                  </ArrowsDiv>
                </PlanetClimate>
                <PlanetSurfaceWater>
                  surface_water
                  <ArrowsDiv>
                    <ArrowUp onClick={ascendingBySurfaceWater}>&#9650;</ArrowUp>
                    <ArrowDown onClick={descendingBySurfaceWater}>
                      &#9660;
                    </ArrowDown>
                  </ArrowsDiv>
                </PlanetSurfaceWater>
                <PlanetPopulation>
                  population
                  <ArrowsDiv>
                    <ArrowUp onClick={ascendingByPopulation}>&#9650;</ArrowUp>
                    <ArrowDown onClick={descendingByPopulation}>
                      &#9660;
                    </ArrowDown>
                  </ArrowsDiv>
                </PlanetPopulation>
              </MovieBodyHeader>

              <MovieBodyContent>
                <PlanetsList
                  movieId={movie.episode_id}
                  movie={movie}
                  allPlanets={allPlanets}
                />
              </MovieBodyContent>
            </MovieBody>
          )}
        </MovieContainer>
      )}
    </>
  )
}

export default Movie
