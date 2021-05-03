import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
//App components
import Navigation from './components/Navigation'
import TimepieceList from './components/TimepieceList'
import Home from './components/Home'
import Footer from './components/Footer'
import Default from './components/Default'
import Cart from './components/checkout/Cart'


const App = () => {
  
  return (
    <BrowserRouter>
      <div className="App" style={{backgroundColor: '#f7f4f4'}}>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/timepieces' component={TimepieceList}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/details'  />
          <Route component={Default} />
        </Switch>       
    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
