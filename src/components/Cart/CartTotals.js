import React from 'react'
import { Link } from 'react-router-dom'

export default function CartTotals({value}) {
  const{ cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <div>
      <React.Fragment>
        <div className="cartTotals__container">
          <div className="cartTotals__row">
            <div>
              <Link to="/timepieces">
                <button 
                  className="cartTotals__clear" 
                  typeof="button"
                  onClick={() => clearCart()}>Clear Cart</button>
              </Link>
              <h5>
                <span className="cartTotals__subtotaa">
                  subtotal :
                </span>
                <strong>$ {cartSubTotal}</strong>
              </h5>
              <h5>
                <span className="cartTotals__subtotaa">
                  tax :
                </span>
                <strong>$ {cartTax}</strong>
              </h5>
              <h5>
                <span className="cartTotals__subtotaa">
                  total :
                </span>
                <strong>$ {cartTotal}</strong>
              </h5>
              </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  )
}
