import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
`

export const Logo = styled.img`
  background-color: none;
  margin: 20px 0;
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

export const HomeUpper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  width: 100%;
`

export const SpinnerImg = styled.img`
  width: 100px;
  height: 100px;
`

export const DashedImg = styled.img`
  width: 100%;
  margin: 20px 0;
`

export const HomeLower = styled.div``
