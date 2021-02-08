import React, { useState, useEffect } from "react";
import Form from '../../components/Form/Form';

const Home = () => {
	const [inputSearch, setInputSearch] = useState("");
  const [lastSearches, setLastSearches] = useState([]);

  return (
    <div>
      <Form 
  		  inputSearch={inputSearch}
  		  setInputSearch={setInputSearch}
        lastSearches={lastSearches}
        setLastSearches={setLastSearches}
  	  />
      <ul>
      <li>recherche1</li>
      <li>recherche2</li>
      <li>recherche3</li>
      <li>recherche4</li>
      <li>recherche5</li>
      </ul>
    </div>
  );
};

export default Home;
