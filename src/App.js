import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//App components
import Navbar from './components/Navbar'
import TimepieceList from './components/TimepieceList'
import Home from './components/Home'
import Footer from './components/Footer'
import Details from './components/Details'
import Default from './components/Default'
import Cart from './components/Cart/Cart'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/timepieces' component={TimepieceList} />
          <Route path='/cart' component={Cart} />
          <Route path='/details' component={Details} />
          <Route component={Default} />
        </Switch>       
      </div>
    <Footer />
    </BrowserRouter>
   
  );
}

export default App;
