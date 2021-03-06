import React, { useContext, useReducer, useEffect, useState } from 'react'
import reducer from './reducer'
import data from './data'

const AppContext = React.createContext(

)
const { products } = data; 

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
  user: null
}

const AppProvider = ({children}) => {
const [state, dispatch] = useReducer(reducer, initialState)
const [details, setDetails] = useState([])

const clearCart = () => {
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

const addItem = (item) => {
  if(item.inCart === false) { 
    item.inCart = true 
  }
dispatch({type: 'ADD', payload: {...item}})
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

const resetCart = () => {
  dispatch({type: 'RESET_CART' })
}

//getting item for detail page
const getItem = (id) => {
  const detailProduct = products.find(item => item.id === id)
  setDetails(detailProduct)
}

useEffect(() => {
  dispatch({type: 'GET_TOTAL'})
}, [state.cart])


  return <AppContext.Provider 
  value={{
    ...state,
      details,
     products,
    clearCart,
    increase, 
    decrease,
    addItem,
    removeItem,
    showText,
    dispatch,
    resetCart,
    getItem,
  }}>
    {children}
  </AppContext.Provider>
}



export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }