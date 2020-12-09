import React, { useContext, useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom'
// import { Favorites, Modal, Row } from '../../components'
// import { getPlanets } from '../../helpers/actions/actionTypes/getData/getPlanets'
// import { getFilms } from '../../helpers/actions/actionTypes/getData/getFilms'
// import { getPeople } from '../../helpers/actions/actionTypes/getData/getPeople'
// import { GlobalContext } from '../../helpers/Provider'
import {
  Br,
  HomeContainer,
  HomeContents,
  HomeLower,
  HomeTitle,
  HomeUpper,
  Image,
} from './Home.elements'
import LOGO from './../Assets/LOGO.svg'

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
        <HomeTitle>
          <Image src={LOGO} alt='' />
        </HomeTitle>
        <HomeContents>
          <HomeUpper>Upper</HomeUpper>
          <Br />
          <HomeLower>Lower</HomeLower>
        </HomeContents>
      </HomeContainer>
    </>
  )
}

export default Home
