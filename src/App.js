import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

//App components
import Navigation from './components/Navigation'
import TimepieceList from './components/TimepieceList'
import Home from './components/Home'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import { useGlobalContext } from './context';

const App = () => {
  const { loading } = useGlobalContext()
  if(loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <BrowserRouter>
      <div className="App" style={{backgroundColor: '#000', minHeight: '100vh', position: 'relative', padding: '0 0 100px'}}>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/timepieces' component={TimepieceList}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/checkout' component={Checkout}/>
        </Switch>       
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
