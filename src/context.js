import React, { Component } from 'react'
import { storeTimepieces, detailTimepiece } from './data'


const ProductContext = React.createContext()
//Provider
//Consumer

 class ProductProvider extends Component {
    state = {
      products: storeTimepieces,
      detailProduct: detailTimepiece
    }

    handleDetail = () => {
      console.log('hello from detail')
    }

    addToCart = () => {
      console.log('hello from add to cart')
    }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state, 
        handleDetail: this.handleDetail, 
        addToCart: this.addToCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}


const ProductConsumer = ProductContext.Consumer;

export  { ProductConsumer, ProductProvider }
