import React, { useState } from 'react'
import { LoadingSpinner, MovieCategory, MovieHeader } from '..'
import Planet from '../Planet/Planet'
import {
  MovieBody,
  MovieBodyContent,
  MovieBodyHeader,
  MovieContainer,
  MovieHeaderTitle,
  MovieHeaderButton,
} from './Movie.elements'

function Movie({
  moviesState: {
    movies: { data, loading, error },
  },
}) {
  const [open, setOpen] = useState(false)

  // console.log('data:', data)

  return (
    <>
      {loading && data.length === 0 && <LoadingSpinner big />}

      {data.length > 0 &&
        data.map((movie) => (
          <MovieContainer key={movie.title}>
            {/* <MovieHeader>
                <MovieHeaderTitle>{movie.title}</MovieHeaderTitle>
                <MovieHeaderButton onClick={() => setOpen(!open)} />
              </MovieHeader> */}
            <MovieHeader title={movie.title} open={open} setOpen={setOpen} />

            {open && data.length > 0 && (
              <div>This is the movie body</div>
              // <MovieBody>
              //   <MovieBodyHeader>
              //     <MovieCategory title='Planet Name' />
              //     <MovieCategory title='Rotation period' />
              //     <MovieCategory title='Orbital period' />
              //     <MovieCategory title='Diameter' />
              //     <MovieCategory title='Climate' />
              //     <MovieCategory title='Surface water' />
              //     <MovieCategory title='Population' />
              //   </MovieBodyHeader>

              //   <MovieBodyContent>
              //     {loading && data.length === 0 && <LoadingSpinner />}
              //     {data.length > 0 &&
              //       data.map((planet) => (
              //         <Planet key={planet.title} planet={planet} />
              //       ))}
              //   </MovieBodyContent>
              // </MovieBody>
            )}
          </MovieContainer>
        ))}
    </>
  )
}

export default Movie
