import React, {useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//App components
import Navbar from './components/Navbar'
import TimepieceList from './components/TimepieceList'
import Home from './components/Home'
import Footer from './components/Footer'
import Default from './components/Default'
import Cart from './components/cart/Cart'


const App = () => {
  const [cartItems, setCartItems] = useState([])
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/timepieces' component={TimepieceList} />
          <Route path='/cart' render={() => <Cart cartItems={cartItems} />} />
          <Route path='/details'  />
          <Route component={Default} />
        </Switch>       
      </div>
    <Footer />
    </BrowserRouter>
   
  );
}

export default App;
