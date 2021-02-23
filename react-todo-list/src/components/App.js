import React, { useState, useEffect } from "react";
import Counts from "./Counts";
import AddForm from "./AddForm";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import "../css/styles.css";

const App = () => {
	// initialize todos and setTodo
	const [todos, setTodos] = useState([]);

	// implement local storage retrieval
	useEffect(() => {
		// get stored todo objects
		const savedTodos = localStorage.getItem("todos");

		// parse objects and update state
		setTodos(JSON.parse(savedTodos));
	}, []);

	// implement local storage saving called only when todos array is updated
	useEffect(() => {
		// stringify todos and save in localStorage
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	/**
	 * Add todo to TodoList, function is used in AddForm
	 * @param {str} text the todo text from form input
	 * @return an updated array of todos
	 */
	const addTodo = (text) => {
		// exit function is text is blank
		if (text === "") return;
		// set todos based on prevState using spread operator
		setTodos((prevState) => {
			return [...prevState, { id: uuidv4(), text: text, checked: false }];
		});
	};

	/**
	 * Toggles the checked status of the todo
	 * @param {alphanumeric} id the unique id of the todo
	 * @returns the todo with the checked status updated
	 */
	const toggleTodo = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id !== id) return todo;
				else {
					return { id: todo.id, text: todo.text, checked: !todo.checked };
				}
			})
		);
	};

	/**
	 * Removes todo from the todos array
	 * @param {alphanumeric} id the unique id of the todo
	 * @returns the todo array without the deleted todo
	 */
	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return (
		<div>
			<header className="header">
				<h1>React Todo List</h1>
			</header>
			<Counts todos={todos} />
			<AddForm addTodo={addTodo} />
			<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
		</div>
	);
};

export default App;
