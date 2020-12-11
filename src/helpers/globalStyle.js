const { createGlobalStyle, default: styled } = require('styled-components')

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
}

html, body {
  background-color: #E0E6EE;
}

`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  border-radius: 4px;
  align-items: center;
  background-color: #1ba1be;
  white-space: nowrap;
  width: 160px;
  height: 33px;
  color: #ffffff;
  font-family: Barlow;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    color: black;
    background-color: #364f6b;
  }

  @media screen and (max-width: 540px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

// export const Links = styled(Link)`
//   text-decoration: none;
//   color: #fff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

export default GlobalStyle
