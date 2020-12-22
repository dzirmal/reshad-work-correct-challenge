import styled from 'styled-components'

export const AddMovieContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 0px 2px 1px rgba(196, 196, 196, 0.2);
`

export const AddMovieHeader = styled.div``

export const AddMovieBody = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px;
`

export const Label = styled.h5`
  display: flex;
  font-family: Barlow;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.4px;
  margin-bottom: 5px;
  color: #555555;
`

export const TitleDiv = styled.div`
  border-bottom: 1px solid #999999;
  display: flex;
  height: 35px;
  outline: none;
  margin-bottom: 5px;
`

export const Input = styled.input`
  flex: 1;
  border: none;
  font-family: inherit;
  font-size: 16px;
  line-height: 19.2px;
  margin-bottom: 5px;
  padding: 5px;
  &::input-placeholder {
    color: #c4c4c4;
  }
`

export const SearchDiv = styled.div`
  display: flex;
  height: 35px;
  border-bottom: 1px solid #999999;
  margin-top: 5px;
`

export const SearchInput = styled.input`
  flex: 1;
  border: none;
`

export const SearchImage = styled.img`
  width: 20px;
  margin-left: 10px;
`

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  /* justify-content: flex-end; */
  margin-top: 20px;
`

export const MyMoviesPlanets = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
`
