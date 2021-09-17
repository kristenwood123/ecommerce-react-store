import { createGlobalStyle  } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 14px;
    background-color: #000;
  }

  .Nav {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .links {
    color: #000;
    font-family: 'Work Sans', sans-serif;
    text-transform: uppercase;
    margin: 10px;
    font-size: 15px;
    letter-spacing: 1px;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: none;
      color: gray;
    }
  }

`

export default GlobalStyles