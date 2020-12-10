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
  background: ${({ primary }) => (primary ? '#364f6b' : '#00adb5')};
  white-space: nowrap;
  width: ${({ big }) => (big ? '80px' : '60px')};
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: ${({ primary }) => (primary ? '#0BD5EA' : '##fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    color: ${({ primary }) => (primary ? '#364f6b' : '#0BD5EA')};
    background: ${({ primary }) => (primary ? '#00adb5' : '#364f6b')};
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
