import React, { Component } from 'react'
import { storeTimepieces, detailTimepiece } from './data'


const ProductContext = React.createContext()
//Provider
//Consumer

 class ProductProvider extends Component {
    state = {
      products: [],
      detailTimepiece: detailTimepiece
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
    

    handleDetail = () => {
      console.log('hello from detail')
    }

    addToCart = () => {
      console.log('hello from add to cart')
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
