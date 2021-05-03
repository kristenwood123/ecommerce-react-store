import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/index.css'
import PropTypes from 'prop-types'
import {useGlobalContext} from '../context'

export default function Timepiece ({product}){
  const { addToCart } = useGlobalContext()
  const { title, img, price, inCart } = product
    
    return (
      <div className='timepiece'>
        <div className="timepiece__card">
            <div className="timepiece__img-container">        
              <Link to='/details'>
                <img src={img} alt="product" className='timepiece__card-watch'/>
              </Link>
            </div> 
            <div className="timepiece-text-container">
              <p className="timepiece__title">{title}</p>
              <p className="timepiece__price">${price}.00</p>
            </div>
        <div className="button-container">
          <button 
            className='cart-btn' 
            disabled={inCart ? true : false} 
            onClick={() => console.log(inCart)}>
              {inCart ? (
                  <p disabled>IN CART</p>
                ) : (
                <p>ADD TO CART</p>
                )}</button>
          </div>
        </div>
      </div>        
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