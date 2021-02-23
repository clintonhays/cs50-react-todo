import React from "react";
import Buttons from "./Buttons";

const Todo = (props) => {
	/**
	 * Pass todo id to toggleTodo() callback in App.js
	 */
	const toggleTodo = () => {
		props.toggleTodo(props.todo.id);
	};

	/**
	 * Pass todo id to toggleTodo() callback in App.js
	 */
	const deleteTodo = () => {
		props.deleteTodo(props.todo.id);
	};

	return (
		<li className="todoItem">
			<p className="todoText">{props.todo.text}</p>
			<Buttons
				todoId={props.todo.id}
				toggleTodo={toggleTodo}
				deleteTodo={deleteTodo}
			/>
		</li>
	);
};

export default Todo;
