import React from "react";
import './Search.scss';

const Search = ({ text }) => {

	return (
		<li	className='search'>
		  <p className='search__text'>{text}</p>
		</li>
	);
};

export default Search;