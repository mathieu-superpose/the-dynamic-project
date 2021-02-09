import React from "react";
import './Search.scss';

const Search = ({ text }) => {

	return (
			<li	className='search'>{text}</li>
	);
};

export default Search;