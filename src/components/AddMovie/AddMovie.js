import React, { useContext, useState } from 'react'
import { MovieHeader, MyMoviePlanet } from '..'
import { Button } from '../../helpers/globalStyle'
import { GlobalContext } from '../../helpers/Provider'
import {
  AddMovieBody,
  AddMovieContainer,
  AddMovieHeader,
  Form,
  Label,
  SearchDiv,
  SearchImage,
  Input,
  ButtonDiv,
  TitleDiv,
  MyMoviesPlanets,
  SearchedPlanetsContainer,
  SearchedPlanetName,
} from './AddMovie.elements'
import axios from 'axios'

import { addMovies } from '../../helpers/actions/actionsTypes/addMovie/addMovie'
import searchPlanets from '../../helpers/actions/actionsTypes/searchData/searchPlanets'

function AddMovie() {
  const { planetsDispatch, moviesDispatch } = useContext(GlobalContext)
  const [open, setOpen] = useState(false)
  const [myMoviePlanetsSearch, setMyMoviePlanetsSearch] = useState('')
  const [movieTitle, setMovieTitle] = useState('')

  const [mySearchedPlanets, setMySearchedPlanets] = useState([])
  const [myMovieSelectedPlanets, setMyMovieSelectedPlanets] = useState([])
  // const history = useHistory()
  // const data = planetsState.planets.data
  // const foundPlanets = planetsState.planets.foundPlanets
  // const loading = planetsState.planets.loading
  // const isSearchActive = planetsState.planets.isSearchActive
  // const currentPlanets = isSearchActive ? foundPlanets : data

  const addMyMovie = (e) => {
    e.preventDefault()
    const planetsUrls = []
    myMovieSelectedPlanets.map((item) => planetsUrls.push(item.url))

    moviesDispatch(addMovies({ title: movieTitle, planets: planetsUrls }))
    setMovieTitle('')
    setMyMovieSelectedPlanets([])
  }

  const searchPlanetByName = (e) => {
    const searchText = setMyMoviePlanetsSearch(e.target.value)
    axios
      .get(`https://swapi.dev/api/planets?search=${e.target.value}`)
      .then((response) => {
        // console.log(response.data.results.map((item) => item.name))
        setMySearchedPlanets(response.data.results)
      })
      .catch((error) => console.log(error))

    searchPlanets(searchText)(planetsDispatch)
  }

  const addPlanetToMovie = (planet) => {
    setMyMovieSelectedPlanets([...myMovieSelectedPlanets, planet])
    setMySearchedPlanets([])
    setMyMoviePlanetsSearch('')
  }

  return (
    <>
      <AddMovieContainer>
        <AddMovieHeader>
          <MovieHeader title='Add movie' open={open} setOpen={setOpen} />
        </AddMovieHeader>

        {open && (
          <AddMovieBody>
            <Form>
              <Label>Movie Title</Label>
              <TitleDiv>
                <Input
                  value={movieTitle}
                  placeholder='Please enter movie title!'
                  onChange={(e) => setMovieTitle(e.target.value)}
                />
              </TitleDiv>

              {myMovieSelectedPlanets.length > 0 && (
                <MyMoviesPlanets>
                  {myMovieSelectedPlanets.map((planet, i) => {
                    return <MyMoviePlanet key={i} title={planet.name} />
                  })}
                </MyMoviesPlanets>
              )}

              <Label>Add Planet</Label>
              <SearchDiv>
                <Input
                  value={myMoviePlanetsSearch}
                  type='text'
                  placeholder='Search for a planet for your Movie!'
                  onChange={searchPlanetByName}
                />
                <SearchImage src='Assets/SEARCH.svg' />
              </SearchDiv>

              {mySearchedPlanets.length > 0 && (
                <SearchedPlanetsContainer>
                  {mySearchedPlanets.map((planet, i) => {
                    return (
                      <SearchedPlanetName
                        onClick={() => addPlanetToMovie(planet)}
                        key={i}>
                        {planet.name}
                      </SearchedPlanetName>
                    )
                  })}
                </SearchedPlanetsContainer>
              )}

              <ButtonDiv>
                <Button onClick={addMyMovie}>ADD MOVIE</Button>
              </ButtonDiv>
            </Form>
          </AddMovieBody>
        )}
      </AddMovieContainer>
    </>
  )
}

export default AddMovie
