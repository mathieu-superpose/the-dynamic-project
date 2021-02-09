import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Jobs from './pages/Jobs/Jobs';

const App = () => {
	const [inputSearch, setInputSearch] = useState("");
  	const [lastSearches, setLastSearches] = useState([]);

  return (
    <Router>
	  <div className="app">
	    <Nav />
	      <Switch>
	        <Route path="/" exact>
	          <Home 
	        	inputSearch={inputSearch}
  		  		setInputSearch={setInputSearch}
        		lastSearches={lastSearches}
        		setLastSearches={setLastSearches}
        	  />
	        </Route>
	     	<Route path="/about"><About /></Route>
	    	<Route path="/jobs"><Jobs lastSearches={lastSearches}/></Route>
	      </Switch>
	  </div>
    </Router>
  );
}

export default App;
