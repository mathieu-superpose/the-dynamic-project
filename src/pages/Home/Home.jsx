import React, { useState, useEffect } from "react";
import './Home.scss';
import Form from '../../components/Form/Form';
import Search from '../../components/Search/Search';

const Home = ({ inputSearch, setInputSearch, lastSearches, setLastSearches }) => {
	
  return (
    <div className='home'>
      <Form 
  		  inputSearch={inputSearch}
  		  setInputSearch={setInputSearch}
        lastSearches={lastSearches}
        setLastSearches={setLastSearches}
  	  />
      <ul className='home__searchlist'>
        <Search text={lastSearches[0]} />
        <Search text={lastSearches[1]} />
        <Search text={lastSearches[2]} />
        <Search text={lastSearches[3]} />
        <Search text={lastSearches[4]} />
      </ul>
    </div>
  );
};

export default Home;
