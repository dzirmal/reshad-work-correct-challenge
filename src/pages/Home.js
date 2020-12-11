import React from 'react'

import {
  DashedImg,
  HomeContainer,
  HomeContents,
  HomeLower,
  Logo,
} from './Home.elements'

import { AddMovie, MovieList } from '../components'

function Home() {
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
