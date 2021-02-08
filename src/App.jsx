import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Shop from './pages/Shop/Shop';

const App = () => {

  return (
    <Router>
	  <div className="app">
	    <Nav />
	      <Switch>
	        <Route path="/" exact><Home /></Route>
	     	<Route path="/about"><About /></Route>
	    	<Route path="/shop"><Shop /></Route>
	      </Switch>
	  </div>
    </Router>
  );
}

export default App;
