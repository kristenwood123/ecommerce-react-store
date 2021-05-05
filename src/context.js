import React, { useContext, useState, useReducer, useEffect } from 'react'
import reducer from './reducer'
import data from './data'

const AppContext = React.createContext()
const { products } = data; 

//cartContext
const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0
}

const AppProvider = ({children}) => {
const [state, dispatch] = useReducer(reducer, initialState)
const [items, setItems] = useState(products)


const clearCart = () => {
  dispatch({type: 'CLEAR_CART'})
}

const remove = (id) => {
  dispatch({type: 'REMOVE', payload: id})
}

const increase = (id) => {
  dispatch({type: 'INCREASE', payload: id})
}

const decrease = (id) => {
  dispatch({type: 'DECREASE', payload: id})
}

const addToCart = (id) => {
  let tempCart = [...state.cart]
  let tempProducts = [...items]
  let tempItem = tempCart.find(item => item.id === id)
  if(!tempItem) {
    tempItem = tempProducts.find(item => item.id === id)
   dispatch({type: 'ADD', payload: [tempItem]}) 
  }
}
console.log(state.cart);

  return <AppContext.Provider 
  value={{
    ...state,
    clearCart,
    addToCart,
    remove,
    increase, 
    decrease,
    products,
  
  }}>
    {children}
  </AppContext.Provider>
}



export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }