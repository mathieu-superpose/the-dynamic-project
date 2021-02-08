import React, { useState, useEffect } from "react";
import Form from '../../components/Form/Form';

const Home = () => {
	const [inputText, setInputText] = useState("");

  return (
    <div>
      <Form 
  		  inputText={inputText}
  		  setInputText={setInputText}
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
