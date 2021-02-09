import React, { useState, useEffect } from "react";
import './Joblink.scss';

const Joblink = ({ key, suggestion }) => {

  return (
    <li className='job'>
      <div className='job__card'>
    	<p>{suggestion}</p>
      </div>
    </li>
  );
};

export default Joblink;
