import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/index.css'
import PropTypes from 'prop-types'

export default function Timepiece ({product, onAdd}){
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
              className='timepiece__cart-btn' 
              disabled={inCart ? true : false} 
              onClick={() => onAdd(product)}
              >
              { inCart ? (
              <p className='disabled' disabled>
              {'IN CART'}
              </p>
              ) : (
                <p className='enabled'>ADD TO CART</p>
              )}
            </button>
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