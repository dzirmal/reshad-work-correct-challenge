import React, { useContext, useEffect } from 'react'

import {
  DashedImg,
  HomeContainer,
  HomeContents,
  HomeLower,
  Logo,
} from './Home.elements'

import { AddMovie, MovieList } from '../components'
import { GlobalContext } from '../helpers/Provider'
import { useHistory } from 'react-router-dom'
import { getMovies } from '../helpers/actions/actionsTypes/getData/getMovis'

function Home() {
  const { moviesDispatch } = useContext(GlobalContext)
  const history = useHistory()

  useEffect(() => {
    getMovies(history)(moviesDispatch)
  }, [])

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
            <AddMovie />
          </HomeLower>
        </HomeContents>
      </HomeContainer>
    </>
  )
}

export default Home
