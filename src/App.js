import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


//App components
import Navbar from './components/Navbar'
import TimepieceList from './components/TimepieceList'
import Cart from './components/Cart'
import Home from './components/Home'
import Footer from './components/Footer'
import Timepiece from './components/Timepiece'
import Details from './components/Details'
import Default from './components/Default'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Footer />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/timepieces' component={TimepieceList} />
          <Route path='/cart' component={Cart} />
          <Route path='/details' component={Details} />
          <Route component={Default} />
        </Switch>
        
      </div>
    </BrowserRouter>
   
  );
}

export default App;
