import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//App components
import Navbar from './components/Navbar'
import TimepieceList from './components/TimepieceList'
import Home from './components/Home'
import Footer from './components/Footer'
import Default from './components/Default'
// import Cart from './components/cart/Cart'


const App = () => {
  const [cartItems, setCartItems] = useState([])

  const onAdd = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) => 
            item.id === product.id ? {...exist, count: exist.count + 1 } : item
      )
    )
      } else {
        setCartItems([...cartItems, {...product, count: 1}])
      }
    }

    const onRemove = (product) => {
      const exist = cartItems.find((item) => item.id === product.id);
      if(exist.count === 1) {
        setCartItems(cartItems.filter((item) => item.id !== product.id))
      } else {
        setCartItems(
        cartItems.map((item) => 
            item.id === product.id ? {...exist, count: exist.count - 1 } : item
          )
        )
      }
    }
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/timepieces' render={() => <TimepieceList onAdd={onAdd} />} />
          <Route path='/cart' render={() => <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
          <Route path='/details'  />
          <Route component={Default} />
        </Switch>       
      </div>
    <Footer />
    </BrowserRouter>
   
  );
}

export default App;
