import React from "react";

import './App.scss';

import Nav from './components/Nav/Nav';
import About from './pages/About/About';
import Shop from './pages/Shop/Shop';

const App = () => {
  return (
    <div>
      <Nav />
      <About />
      <Shop />
    </div>
  );
};

export default App;
