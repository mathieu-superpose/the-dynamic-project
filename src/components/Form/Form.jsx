import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import './Form.scss';

const Form = ({ inputSearch, setInputSearch, lastSearches, setLastSearches }) => {

	const inputSearchHandler = (e) => {
		setInputSearch(e.target.value);
	};

	const submitSearchHandler = (e) => {
		e.preventDefault();
		setLastSearches([inputSearch, ...lastSearches]);
		console.log(lastSearches);
		setInputSearch('');
	};

	const statusHandler = (e) => {
		console.log(e.target.value);
	}

	return (
		<form>
			<input onChange={inputSearchHandler} value={inputSearch} type="text" className="todo-input" />
			<button onClick={submitSearchHandler} className="todo-button" type="submit">
				<i className="fas fa-plus-square"></i>
			</button>
		</form>
	);
};

export default Form;