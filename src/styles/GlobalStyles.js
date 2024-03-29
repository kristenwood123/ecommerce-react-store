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

  .Navbar {
    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
         -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 2s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

  .links {
    color: #000;
    font-family: 'Work Sans', sans-serif;
    text-transform: uppercase;
    margin: 10px;
    font-size: 15px;
  }

  .icon {
     @media (max-width: 780px) {
      display: none; 
    }
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: none;
      color: gray;
    }
  }

  .checkout {
    margin-top: 2rem;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 200;
    width: 150px;
    padding: 10px;
    border: 1px solid white;
    background-color: black;
    color: white;
}

  .pay {
    margin-top: 1rem;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 200;
    padding: 5px;
    width: 150px;
    border: 1px solid white;
    background-color: black;
    color: white;
}


`

export default GlobalStyles