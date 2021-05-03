import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

const PAGE_PRODUCTS = 'products'
const PAGE_CART = 'cart'

const AppProvider = ({children}) => {
const [cart, setCart] = useState([])
const [page, setPage] = useState(PAGE_PRODUCTS)


  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const goToCart = (nextPage) => {
    setPage(nextPage)
  }

  return <AppContext.Provider value={{
    addToCart,
    goToCart,
    cart,
    page,
    PAGE_CART
  }}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }