import React, { useState } from "react";

const Buttons = (props) => {
	// set initial state and updater
	const [complete, setComplete] = useState(false);

	/**
	 * Toggles completed state
	 */
	const toggleComplete = () => {
		setComplete(!complete);
	};

	/**
	 * Pass todo id to toggleTodo() callback in Todo.js
	 */
	const toggleTodo = () => {
		props.toggleTodo(props.id);
	};

	/**
	 * Pass todo id to deleteTodo() callback in Todo.js
	 */
	const deleteTodo = () => {
		props.deleteTodo(props.id);
	};

	return (
		<div className="todoButtons">
			<button
				className="completeButton"
				onClick={() => {
					toggleTodo();
					toggleComplete();
				}}
			>
				{complete ? (
					<i className="lni lni-checkmark-circle"></i>
				) : (
					<i className="lni lni-spiner-solid"></i>
				)}
			</button>
			<button className="deleteButton" onClick={deleteTodo}>
				<i className="lni lni-trash"></i>
			</button>
		</div>
	);
};

export default Buttons;
