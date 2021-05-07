import React from 'react'
import { useGlobalContext } from '.././context'
import styled from 'styled-components'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'


const CartItem = ({ id, img, title, price, amount }) => {
  const { removeItem, increase, decrease } = useGlobalContext()

  return (
    <CartItemArticle>
      <div className="container" style={{display: 'flex', justifyContent:'center', alignItems: 'center', left: '0'}}>
      <img src={img} alt={title} />
      <div className='itemDesc'>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button className='remove-btn'
        onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
    
      <div>
       <div className="btn-container">
        <button className='amount-btn'
        onClick={() => increase(id)}>
          <IoIosArrowUp className='arrow'/>
        </button>
        <p className='amount'>{amount}</p>
        <button className='amount-btn'
        onClick={() => decrease(id)}><IoIosArrowDown className='arrow'/>
        </button>
        </div>
        </div>
      </div>
    </CartItemArticle>
  )
}

const CartItemArticle = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
  
  .btn-container {
    display: flex;
    flex-direction: column;
  }
  img {
    width: 150px;
    margin: 0;
  }

  .itemDesc {
    margin: 0;
  }

  .amount {
    margin-bottom: 0;
  }

  .arrow {
    color: var( --clr-main-blue);
    background-color: transparent;
  }

  button {
    border: none;
    background-color: none;
  }

  button:hover {
    transform: scale(1.3);
  }
  
  h4 {
    font-size: 16px;
  }

  .item-price {
    font-size: 15px;
    color: #9fa6ab;
  }

  .remove-btn {
  background-color: var(--clr-main-blue);
  color: white;
  font-size: 14px;
  border: none;
  width: 80px;
  padding: 3px;
  margin-top: 10px;
  border-radius: 6px;
  }
`


export default CartItem