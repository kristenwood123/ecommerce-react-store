import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../styles/index.css'
import PropTypes from 'prop-types'
import { useGlobalContext } from '../context'

export default function Timepiece ({product}){
  const { addItem, showText } = useGlobalContext()
  const { title, img, price, info, inCart } = product

    return (
      <Card>
          <ImageContainer>
              <Link to='/details'>
                <img src={img} alt="product" className='timepiece__card-watch'/>
              </Link>
            </ImageContainer>      
              <Info>{info}</Info>
            <div className="text-container">
              <p className="timepiece__title">{title}</p>
              <p className="timepiece__price">${price}</p>
            </div>
        <div className="button-container">
          <button 
            className='cart-btn' 
            disabled={inCart ? true : false} 
            onClick={() => addItem(product)}>
              {showText(inCart)}
                </button>
          </div>
     </Card>        
      )
    }



const Card = styled.div`
  background-color: white;
  padding: 15px;
  justify-content: center;

  .button-container {
    text-align: center;
  }

  .text-container {
    display: flex;
    margin-top: 10px;
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

const Info = styled.p`
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
const ImageContainer = styled.div`
    display: flex;

    img {
      width: 200px;
    }
`

Timepiece.propTypes = {
  product: PropTypes.shape({
    id:PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart:PropTypes.bool
  }).isRequired
}