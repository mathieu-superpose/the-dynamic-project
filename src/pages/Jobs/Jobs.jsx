import React, { useState, useEffect } from "react";

import './src/Jobs.scss';

const Jobs = ({ lastSearches }) => {

	useEffect(() => {
		fetchJobs();
	}, []);

	const fetchJobs = async () => {
		const data = await fetch(`http://api.dataatwork.org/v1/jobs/autocomplete?contains={lastSearches[0]}`);
		const jobs = await data.json();
		console.log(jobs);
	};

  return (
    <div>
      <h1>Hello from Jobs</h1>
    </div>
  );
};

export default Jobs;
