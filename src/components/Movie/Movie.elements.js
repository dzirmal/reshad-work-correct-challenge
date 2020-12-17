import styled from 'styled-components'

export const MovieContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
  background-color: #ffffff;
`

export const MovieBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
`

export const MovieBodyHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* box-shadow: 0px 5px 5px rgba(196, 196, 196, 0.2) inset; */
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: 10px;
  padding: 5px;
`

export const MovieBodyContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ArrowsDiv = styled.button`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  border: none;
  background-color: #ffffff;
  outline: none;
  color: #000;
`

export const ArrowUp = styled.span`
  display: flex;
  cursor: pointer;
  font-size: 12px;
  margin-bottom: -1.5px;
  &:hover {
    color: #00687f;
  }
`

export const ArrowDown = styled.span`
  display: flex;
  cursor: pointer;
  font-size: 12px;
  margin-top: -1.5px;
  &:hover {
    color: #00687f;
  }
`
