import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import './Form.scss';

const Form = ({ inputText, setInputText }) => {

	const inputTextHandler = (e) => {
		console.log(e.target.value);
	};

	const submitTotDoHandler = (e) => {
		e.preventDefault();

		setInputText('');
	};

	const statusHandler = (e) => {
		console.log(e.target.value);
	}

	return (
		<form>
			<input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" />
			<button onClick={submitTotDoHandler} className="todo-button" type="submit">
				<i className="fas fa-plus-square"></i>
			</button>
		</form>
	);
};

export default Form;