import React, { useRef } from "react";

const AddForm = ({ props }) => {
	// create reference to input
	const todoInput = useRef("");

	/**
	 * Sends input value to addTodo() in App,js
	 * @param {str} e keystroke in the input field
	 */
	const addTodo = (e) => {
		// callback to add text parameter to addTodo() in App.js
		props.addTodo(todoInput.current.value);
		// reset input field to empty
		todoInput.current.value = null;
		// refocus to input field after submission
		todoInput.current.focus();
		// prevent submit from refreshing the page
		e.preventDefault();
	};

	return (
		<div className="formWrapper">
			<form onSubmit={addTodo}>
				<label className="inputLabel" htmlFor="todoInput">
					What would you like to do?
				</label>
				<input
					type="text"
					name="todoInput"
					id="todoInput"
					placeholder="add your task"
					ref={todoInput}
				/>
				<button className="addTodo" onClick={addTodo}>
					Add Todo
				</button>
			</form>
		</div>
	);
};

export default AddForm;
