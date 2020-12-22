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
} from './AddMovie.elements'

import { addMovies } from '../../helpers/actions/actionsTypes/addMovie/addMovie'
import { ADD_MOVIE } from '../../helpers/actions'

function AddMovie() {
  const { moviesState, moviesDispatch, dispatch } = useContext(GlobalContext)

  // console.log('moviesState:', moviesState)
  // console.log('moviesDispatch:', moviesDispatch)

  const [open, setOpen] = useState(false)
  const [movieTitle, setMovieTitle] = useState('')
  const [myMovie, setMyMovie] = useState([
    {
      title: '',
    },
  ])
  const [myMoviePlanets, setMyMoviePlanets] = useState([])

  // to insert to the local storage
  //     localStorage.setItem('words', JSON.stringify(words));
  //     // convert an array to string
  //     const arrayString = JSON.stringify(array);
  //     // convert string to original type
  //     const array3 = JSON.parse(arrayString);
  //     console.log(typeof arrayString);
  //     console.log(Array.isArray(array));
  //     console.log(Array.isArray(array3));
  //     // to insert to local storage
  //     window.localStorage.setItem('people', arrayString);
  //     let words = [];
  //     // How to get from local storage
  //     if (localStorage.words.length > 0) {
  //       words = JSON.p

  const addMyMovie = (e) => {
    e.preventDefault()
    moviesDispatch(addMovies({ title: movieTitle }))
    setMovieTitle('')
  }

  const addPlanetsToMyMovie = (e) => {
    e.preventDefault()
  }

  // const planetsTitle = myMovie.map((movie) => {
  //   return movie.planets.map((planet) => planet.title)
  // })

  // console.log('planetsTitle:', planetsTitle)

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
                  onChange={(e) => setMovieTitle(e.target.value)}
                  placeholder='Please enter the title of the movie!'
                />
              </TitleDiv>

              {/* {myMovie.length > 0 && (
                <MyMoviesPlanets>
                  {myMovie.map((movie) => {
                    return movie.planets.map((planet) => (
                      <MyMoviePlanet key={planet.title} title={planet.title} />
                    ))
                  })}
                </MyMoviesPlanets>
              )} */}

              <Label>Add Planet</Label>
              <SearchDiv>
                <Input
                  type='text'
                  placeholder='Search for the planet in database!'
                  onChange={(e) => setMyMoviePlanets(e.target.value)}
                />
                <SearchImage src='Assets/SEARCH.svg' />
              </SearchDiv>
              <ButtonDiv>
                <Button onClick={addPlanetsToMyMovie}>ADD PLANET</Button>
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
