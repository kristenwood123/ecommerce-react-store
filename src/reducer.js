const reducer = (state, action) => {
   if (action.type === 'ADD') {
     const item = action.payload
     const itemExists = state.cart.find((id) => item.id === id.item)

     if(itemExists) {
       return {
         ...state,
         cart: state.cart.map((item) => item === itemExists.item ? itemExists : item)
       }
     } else {
        return {
          ...state,
          cart: [...state.cart, item]
        }
     }
  }

  if (action.type === 'CLEAR_CART') {
    return {...state, cart: []}
  }

    if (action.type === 'RESET_CART') {
    return {...state, cart: []}
  }

  if(action.type === 'REMOVE') {
    return {...state, cart: state.cart.filter((cartItem) => 
        cartItem.id !== action.payload)}
  } 
  if(action.type === 'INCREASE') {
    let tempCart = state.cart.map((cartItem) => {
      if(cartItem.id === action.payload) {
        return {...cartItem, amount: cartItem.amount + 1}
      }
      return cartItem
    })
    return {...state, cart: tempCart}
  }
  if(action.type === 'DECREASE') {
    let tempCart = state.cart.map((cartItem) => {
      if(cartItem.id === action.payload) {

        return {...cartItem, amount: cartItem.amount - 1}
      }
      return cartItem
    })
    .filter((cartItem) => cartItem.amount !== 0)
    return {...state, cart: tempCart}
  }

  if(action.type === 'GET_TOTAL') {
    let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
        const { price, amount}  = cartItem;
        const itemTotal = price * amount;


        cartTotal.total += itemTotal
        cartTotal.amount += amount
        return cartTotal
    }, 
    {
      total: 0,
      amount: 0
    }
    )

    total = parseFloat(total.toFixed(2))
    return {...state, total, amount }
  }

  if(action.type === 'SET_USER') {
    return {
      ...state,
      user: action.user
    }
  }
 
  return state
}

export default reducer