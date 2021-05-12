import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

//App components
import Navigation from './components/Navigation'
import TimepieceList from './components/TimepieceList'
import Home from './components/Home'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Payment from './components/Payment'
import Checkout from './components/Checkout'
import { useGlobalContext } from './context';
import { auth } from './firebase'
import StripeContainer from './components/StripeContainer';


const App = () => {
  const { loading, dispatch } = useGlobalContext()

useEffect(() => {
  auth.onAuthStateChanged(authUser => {

    if(authUser) {
      // the user just logged in / the user was logged in
      dispatch({
        type: 'SET_USER', 
        user: authUser })
    } 
    else {
      //the user is logged out
        dispatch({
          type: 'SET_USER', 
          user: null })
    }
  })
    
  }, [])

  if(loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
  )}
  return (
    <BrowserRouter>
      <div className="App" style={{backgroundColor: '#000', minHeight: '100vh', position: 'relative', padding: '0 0 100px'}}>
        <Navigation user={dispatch.user}/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/timepieces' component={TimepieceList}/>
          <Route path='/cart' component={Cart} />
          <Route path='/checkout' component={Checkout}/>
          <Route path='/payment' component={StripeContainer}/>
        </Switch>       
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
