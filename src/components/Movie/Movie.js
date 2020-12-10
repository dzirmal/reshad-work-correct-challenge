import React, { useState } from 'react'
import { MovieCategory } from '..'
import {
  MovieBody,
  MovieBodyContent,
  MovieBodyHeader,
  MovieContainer,
  MovieHeader,
  MovieHeaderButton,
  MovieHeaderName,
} from './Movie.elements'

function Movie() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <MovieContainer>
        <MovieHeader>
          <MovieHeaderName>Name</MovieHeaderName>
          <MovieHeaderButton
            open={open}
            onClick={() => setOpen(!open)}></MovieHeaderButton>
        </MovieHeader>
        {open && (
          <MovieBody>
            <MovieBodyHeader>
              <MovieCategory title='Planet Name' />
              <MovieCategory title='Rotation period' />
              <MovieCategory title='Orbital period' />
              <MovieCategory title='Diameter' />
              <MovieCategory title='Climate' />
              <MovieCategory title='Surface water' />
              <MovieCategory title='Population' />
            </MovieBodyHeader>
            <MovieBodyContent>Body Content</MovieBodyContent>
          </MovieBody>
        )}
      </MovieContainer>
    </>
  )
}

export default Movie
