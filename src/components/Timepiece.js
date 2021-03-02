import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Timepiece.css'
import PropTypes from 'prop-types'

export default function Timepiece ({product}){
       const { id, title, img, price, inCart } = product
    return (
      <div className='Timepiece'>
        <div className="Timepiece__card">
            <div className="Timepiece__img-container">        
          <Link to='/details'>
            <img src={img} alt="product" className='Timepiece__card-watch'/>
          </Link>
          </div> 
          <div className="Timepiece__title">{title}</div>          
        </div>             
      <div className="button-container">
      <div className="Timepiece__price">${price}.00</div>
          <button 
            className='Timepiece__cart-btn' 
            disabled={inCart ? true : false} 
            >
            { inCart ? (
            <p className='disabled' disabled>
            {'IN CART'}
            </p>
            ) : (
              <p className='enabled'>ADD TO CART</p>
            )}</button>
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