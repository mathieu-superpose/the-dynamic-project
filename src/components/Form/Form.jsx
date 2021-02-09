import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import './Form.scss';

const Form = ({ inputSearch, setInputSearch, lastSearches, setLastSearches }) => {

	const inputSearchHandler = (e) => {
		setInputSearch(e.target.value);
	};

	const submitSearchHandler = (e) => {
		e.preventDefault();
		setLastSearches([inputSearch, lastSearches[0], lastSearches[1], lastSearches[2], lastSearches[3]]);
		setInputSearch('');
	};

	const statusHandler = (e) => {
		console.log(e.target.value);
	}

	return (
		<form className="form">
			<input onChange={inputSearchHandler} value={inputSearch} type="text" className="form__input" placeholder="Search a job"/>
			<button onClick={submitSearchHandler} className="form__button" type="submit">
				<i className="fas fa-plus-square"></i>
			</button>
		</form>
	);
};

export default Form;
