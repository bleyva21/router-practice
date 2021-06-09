import About from './About.js'
import Shop from './Shop.js'
import Nav from './Nav.js'
import { Route } from 'react-router-dom';
import React from 'react';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
          <Nav />
          <Route path="/home" Component={Home}/>
          <Route path="/products" Component={Products}/>
          <Route path="/cart" Component={}/>
          <Route path="/checkout" Component={Home}/>
      </div>
    );
  }
}

export default App;
