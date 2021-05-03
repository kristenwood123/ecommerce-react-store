import React from 'react'
import '../styles/index.css'
import { useGlobalContext } from '.././context'

const Cart = () => {
  const { cart } = useGlobalContext();
    return (
      <div className='cart'>
        <h1 className='cart__heading'>Your Cart</h1>
        {cart.map((item) => {
          const {id, title, img, price, inCart} = item;
          return (
            <>
             <div className="timepiece__img-container" key={id}>        
                <img src={img} alt="product" className='timepiece__card-watch'/>
            </div> 
          <div className="timepiece-text-container">
          <p className="timepiece__title">{title}</p>
          <p className="timepiece__price">${price}.00</p>
          </div>
        </>
          )
        })}
        </div>
        )
    };
export default Cart