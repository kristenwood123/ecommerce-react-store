import React from 'react'
import styled from 'styled-components'


const CheckoutProduct = ({title, img, price, amount}) => {

  return (
   <CheckoutSection>
      <div className="text-container">
        <img src={img} alt="watch"/>
        <p className='amount'>{amount}</p>
      </div>
      <div className="text-container2">
        <p className='title'>{title}</p>
        <p className='price'>${price}</p>
      </div>
   </CheckoutSection>
  )
}

export default CheckoutProduct

const CheckoutSection = styled.section`
  display: flex;
  width: 100%;

  img {
    width: 70px;
  }
  
  .amount {
   background-color: white;
   opacity: .5;
   color: gray;
   width: 20px;
   height: 20px;
   font-size: 14px;
   text-align: center;
   border-radius: 50%;
   position: relative;
    bottom: 60px;
    left: 40px;
    margin: 0;
  }

  .title, .price {
    text-transform: lowercase;
    font-size: 14px;
  }

  .text-container2 {
    display: flex;
    flex-direction: column;
  }

`
