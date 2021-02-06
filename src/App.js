import React from 'react'
import Navbar from './components/Navbar'
import Timepieces from './components/Timepieces'
import Home from './components/Home'
import { BrowserRouter, Route } from 'react-router-dom'

//App components

const App = () => {
  return (
    
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home}/>
        <Route path='/timepieces' component={Timepieces} />
      </div>
    </BrowserRouter>
  );
}

export default App;
