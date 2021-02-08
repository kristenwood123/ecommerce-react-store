import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import '../styles/Details.css'

export default class Details extends Component {
  render() {
    return (     
        <ProductConsumer>
          {(value) => {
            const { id, title, img, price, info, inCart } = value.detailTimepiece;
            return (
              <div className='details'>
                <img className='details__img' src={img} alt=""/>
                  <div className="details__info-container">
                    <p className='details__title'>{title}</p>
                    <p className="details__info">{info}</p>
                    <p className="details__price">${price}.00</p>
                   <div className="details__btn-container">
                      <button className='details__btn'>Add to Cart</button>
                      <Link to='/timepieces'><button className='details__btn-shopping'>Back to Timepieces</button></Link>
                    </div>
                </div>
              </div>
            )
          }}
        </ProductConsumer>
    )
  }
}
