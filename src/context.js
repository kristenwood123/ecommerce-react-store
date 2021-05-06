import React, { useContext, useState, useReducer, useEffect } from 'react'
import reducer from './reducer'
import data from './data'

const AppContext = React.createContext(

)
const { products } = data; 

//cartContext
const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
  inCart: false
}

const AppProvider = ({children}) => {
const [state, dispatch] = useReducer(reducer, initialState)
const { inCart } = products

const clearCart = (cart) => {
  {cart.forEach((item) => item.inCart = false)}
  showText(inCart, state.cart)
  dispatch({type: 'CLEAR_CART'})
}

const showText = (inCart) => {
  if(inCart) {
    state.cart.inCart = true
    return 'In Cart'
  } 
  else {
    state.cart.inCart = false
    return 'Add to Cart'
      }
  }

const removeItem = (id) => {
  dispatch({type: 'REMOVE', payload: id})
}

const increase = (id) => {
  dispatch({type: 'INCREASE', payload: id})
}

const decrease = (id) => {
  dispatch({type: 'DECREASE', payload: id})
}

const addItem = (item) => {
  if(item.inCart === false) { 
    item.inCart = true 
  }
dispatch({type: 'ADD', payload: {...item}})
}

useEffect(() => {
  dispatch({type: 'GET_TOTAL'})
}, [state.cart])


  return <AppContext.Provider 
  value={{
    ...state,
    clearCart,
    increase, 
    decrease,
    products,
    addItem,
    removeItem,
    showText
  }}>
    {children}
  </AppContext.Provider>
}



export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }