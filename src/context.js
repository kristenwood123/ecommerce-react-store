import React, { Component } from 'react'
import { storeTimepieces, detailProduct } from './data'


const ProductContext = React.createContext()
//Provider
//Consumer

 class ProductProvider extends Component {
    state = {
      products: [],
      detailProduct: detailProduct
    }

    componentDidMount() {
      this.setProducts();
    }

    setProducts = () => {
      let tempProducts = [];
      storeTimepieces.forEach(item => {
        const singleItem = { ...item };
        tempProducts = [...tempProducts, singleItem]
      })
      this.setState(() => {
        return { products: tempProducts }
      })
    }
    
    getItem = (id) => {
      const product = this.state.products.find(item => item.id === id)
      return product;
    }

    handleDetail = (id) => {
      const product = this.getItem(id);
      this.setState(() => {
        return { detailProduct: product }
      })
    }

    addToCart = (id) => {
      console.log(`id is ${id}`)
    }



  render() {
    return (
      //gives Provider an object
      <ProductContext.Provider value={{
        ///spreads all properties in state in a new object
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
