import React from 'react'
import {
  ArrowUp,
  ArrowDown,
  MovieCategoryArrows,
  MovieCategoryContainer,
  MovieCategoryTitle,
} from './MovieCategory.elements'

function MovieCategory({ title }) {
  return (
    <>
      <MovieCategoryContainer>
        <MovieCategoryTitle>{title}</MovieCategoryTitle>
        <MovieCategoryArrows>
          <ArrowUp>&#9650;</ArrowUp>
          <ArrowDown>&#9660;</ArrowDown>
        </MovieCategoryArrows>
      </MovieCategoryContainer>
    </>
  )
}

export default MovieCategory
