import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useGlobalContext } from '../context'
import { Card, ImageContainer, Info } from '../styles/Timepiece.styles'
export default function Timepiece ({product}){
  const { addItem, showText, cart, getItem } = useGlobalContext()
  const { id, title, img, price, info, inCart } = product

useEffect(() => {
  if(inCart) {
    if(cart.length === 0) {
      product.inCart = false;
      showText(inCart)
    }
  }
  },[])
    return (
      <Card>
          <ImageContainer onClick={() => getItem(id)}>
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

Timepiece.propTypes = {
  product: PropTypes.shape({
    id:PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart:PropTypes.bool
  }).isRequired
}