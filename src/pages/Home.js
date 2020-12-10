import React, { useContext, useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom'
// import { Favorites, Modal, Row } from '../../components'
// import { getPlanets } from '../../helpers/actions/actionTypes/getData/getPlanets'
// import { getFilms } from '../../helpers/actions/actionTypes/getData/getFilms'
// import { getPeople } from '../../helpers/actions/actionTypes/getData/getPeople'
// import { GlobalContext } from '../../helpers/Provider'
import {
  DashedImg,
  HomeContainer,
  HomeContents,
  HomeLower,
  HomeUpper,
  Logo,
  SpinnerImg,
} from './Home.elements'

import { LoadingSpinner, Movie, MovieList } from '../components'

function Home() {
  // const [showModal, setShowModal] = useState(false)
  // const openModal = () => {
  //   setShowModal(true)
  // }

  // const {
  //   planetsDispatch,
  //   planetsState,
  //   filmsDispatch,
  //   filmsState,
  //   peopleDispatch,
  //   peopleState,
  // } = useContext(GlobalContext)
  // const history = useHistory()

  // useEffect(() => {
  //   getPlanets(history)(planetsDispatch)
  //   getFilms(history)(filmsDispatch)
  //   getPeople(history)(peopleDispatch)
  // }, [])
  return (
    <>
      <HomeContainer>
        <Logo src='Assets/LOGO.svg' alt='' />

        <HomeContents>
          <MovieList />
        </HomeContents>
      </HomeContainer>
      <DashedImg src='Assets/Dash.svg' />
      <HomeContainer>
        <HomeContents>
          <HomeLower>
            <Movie />
          </HomeLower>
        </HomeContents>
      </HomeContainer>
    </>
  )
}

export default Home
