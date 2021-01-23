import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
// import Contact from './pages/Contact'

import './App.css';
import Nav from "./Components/Navbar/Nav";
import Form from "./Components/Form/Form";

function App() {
  return (
    <div className="App">
      <div className='full'>
      <Router>
        <Nav/>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <Form/>
          </Route>
        </Switch>
      
    </Router>
    </div>
    </div>
  );
}

export default App;
