import styled from 'styled-components'

export const Card = styled.div`
  :hover {
    box-shadow: 0px 0px 10px #fff;
  }

  background-color: white;
  padding: 15px;
  justify-content: center;

  .button-container {
    text-align: center;
  }

  .text-container {
    display: flex;
    margin-top: 10px;
    justify-content: space-around;
  }

  .cart-btn {
    background-color: white;
    color: black;
    font-size: 14px;
    border: none;
    width: 100px;
    margin-top: 10px;
    padding: 5px;
    border: 1px solid black;
    text-align: center;
  }

  .cart-btn:hover {
    border: 1px solid black;
    background-color: black;
    color: white;
  }

  p { 
    margin-bottom: 0;
  }
`
export const Info = styled.p`
  width: 100%;
  line-height: 1.2em;
  height: 3.6em;
  font-size: 14px;
  margin-bottom: 10px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;  
`
export const ImageContainer = styled.div`
    display: flex;

    img {
      width: 200px;
    }
`