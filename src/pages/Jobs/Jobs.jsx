import React, { useState, useEffect } from "react";

import './src/Jobs.scss';

const Jobs = ({ lastSearches }) => {
	const [results, setResults] = useState([]);

	useEffect(() => {
		fetchJobs();
	}, []);

	const fetchJobs = async () => {
		const data = await fetch(`http://api.dataatwork.org/v1/jobs/autocomplete?contains=${lastSearches[0]}`);
		const jobs = await data.json();
		setResults(JSON.parse(jobs));
	};

  return (
    <div>
      <h1>Hello from Jobs</h1>
      <ul>
      <li>test</li>
       {/* <li>
          <p>{results[0]}</p>
        </li>*/}
      </ul>
    </div>
  );
};

export default Jobs;
