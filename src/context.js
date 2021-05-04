import React, { useContext, useState, useReducer, useEffect } from 'react'
import reducer from './reducer'
import data from './data'

const AppContext = React.createContext()
const { products } = data; 

//cartContext
const initialState = {
  loading: false,
  cart: products,
  total: 0,
  amount: 0
}

const AppProvider = ({children}) => {
const [state, dispatch] = useReducer(reducer, initialState)

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
  dispatch({type: 'ADD_TO_CART', payload: id}) 
}

  return <AppContext.Provider 
  value={{
    ...state,
    clearCart,
    addToCart,
    remove,
    increase, 
    decrease,
    products
  }}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }