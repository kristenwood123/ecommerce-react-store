import React from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
import '../styles/Timepiece.css'

export default class Timepiece extends React.Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;

    return (
      <div className='Timepiece'>
        <div className="Timepiece__card">
          <div className="Timepiece__img-container" onClick={() => console.log('you clicked')}>
          <Link to='/details'>
            <img src={img} alt="product" className='Timepiece__card'/>
          </Link>
          </div>
          <div className="Timepiece__title">{title}</div>
          <div className="Timepiece__price">${price}.00</div>
          <button className='Timepiece__cart-btn' disabled={inCart ? true : false} onClick={() => {console.log('added to cart')}}></button>
        </div>
      </div>
    )
  }
}


