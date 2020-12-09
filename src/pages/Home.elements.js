import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: rgb(234, 237, 237);
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
  /* background: #e0e6ee; */
`

export const Image = styled.img`
  background-color: none;
  padding: 0;
  margin: 0;
`

export const HomeTitle = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

export const HomeContents = styled.div`
  display: flex;
  /* justify-content: space-around; */
  flex-direction: column;

  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
  }
`

export const HomeUpper = styled.div``

export const Br = styled.hr`
  border: 2px dashed #ffffff;
`

export const HomeLower = styled.div``
