import React, { useState, useEffect } from "react";
import Joblink from '../../components/Joblink/Joblink';

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
    	 <Joblink key={result.uuid} suggestion={result.suggestion} />
    	 )}
    </ul>
  );
};

export default Jobs;
