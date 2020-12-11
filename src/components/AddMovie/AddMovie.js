import React, { useState } from 'react'
import { MovieHeader } from '..'
import { Button } from '../../helpers/globalStyle'
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
} from './AddMovie.elements'

function AddMovie() {
  const [open, setOpen] = useState(false)

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
                <Input placeholder='Please enter the title of the movie!' />
              </TitleDiv>

              <Label>Add Planet</Label>
              <SearchDiv>
                <Input placeholder='Search for the planet in database!' />
                <SearchImage src='Assets/SEARCH.svg' />
              </SearchDiv>
              <ButtonDiv>
                <Button>ADD MOVIE</Button>
              </ButtonDiv>
            </Form>
          </AddMovieBody>
        )}
      </AddMovieContainer>
    </>
  )
}

export default AddMovie
