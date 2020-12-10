import styled from 'styled-components'

export const MovieContainer = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

export const MovieHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 2px 1px rgba(196, 196, 196, 0.2);
`

export const MovieHeaderName = styled.span`
  height: 20px;
  font-family: Barlow;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  background-color: #ffffff;
  line-height: 19px;
  /* identical to box height */
  display: flex;
  justify-content: center;
  align-items: center;

  color: #00687f;
`

export const MovieHeaderButton = styled.button`
  background-color: #ffffff;
  border: none;
  outline: none;
  &::after {
    content: ${(props) =>
      props.open
        ? 'url("/Assets/ArrowOpen.svg")'
        : 'url("/Assets/ArrowClose.svg")'};
  }
`

export const MovieBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MovieBodyHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 5px 5px rgba(196, 196, 196, 0.2) inset;
`

export const MovieBodyContent = styled.div``
