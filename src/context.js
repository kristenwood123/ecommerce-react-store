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
}

const AppProvider = ({children}) => {
const [state, dispatch] = useReducer(reducer, initialState)

const clearCart = () => {
  dispatch({type: 'CLEAR_CART'})
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
dispatch({type: 'ADD', payload: item})
}


  return <AppContext.Provider 
  value={{
    ...state,
    clearCart,
    increase, 
    decrease,
    products,
    addItem,
    removeItem
  }}>
    {children}
  </AppContext.Provider>
}



export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }