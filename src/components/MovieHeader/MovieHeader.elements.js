import styled from 'styled-components'

export const MovieHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 2px 1px rgba(196, 196, 196, 0.2);
`

export const MovieHeaderTitle = styled.span`
  height: 20px;
  font-family: Barlow;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  background-color: #ffffff;
  line-height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #00687f;
`

export const MovieHeaderButton = styled.button`
  cursor: pointer;
  background-color: #ffffff;
  border: none;
  outline: none;
  &::after {
    content: ${(props) =>
      props.open
        ? 'url("/Assets/ArrowClose.svg")'
        : 'url("/Assets/ArrowOpen.svg")'};
  }
`
