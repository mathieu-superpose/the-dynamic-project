import React, { useState, useEffect } from "react";
import Joblink from '../../components/Joblink/Joblink';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import './Jobs.scss';

const Jobs = ({ lastSearches, results, setResults }) => {

	useEffect(() => {
		fetchJobs();
	}, []);

	const fetchJobs = async () => {
		const data = await fetch(`http://api.dataatwork.org/v1/jobs/autocomplete?contains=${lastSearches[0]}`);
		setResults(await data.json());
	};

  return (
    <ul className='jobs'>
    	{
    	 results.map(result=>
				 <Link to={`/job/${result.uuid}`}>
    	 <Joblink key={result.uuid} suggestion={result.suggestion} key={uuidv4()} />
			 </Link>
    	 )}
    </ul>
  );
};

export default Jobs;
