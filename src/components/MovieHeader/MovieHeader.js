import {
  MovieHeaderContainer,
  MovieHeaderButton,
  MovieHeaderTitle,
} from './MovieHeader.elements'

function MovieHeader({ title, open, setOpen }) {
  return (
    <>
      <MovieHeaderContainer>
        <MovieHeaderTitle>{title}</MovieHeaderTitle>
        <MovieHeaderButton open={open} onClick={() => setOpen(!open)} />
      </MovieHeaderContainer>
    </>
  )
}

export default MovieHeader
