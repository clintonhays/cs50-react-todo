import React, { useState, useRef } from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import "../css/styles.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const todoInput = useRef("");

  const addTodo = () => {
    const todoText = todoInput.current.value;
    if (todoText === "") return;
    setTodos((prevState) => {
      return [...prevState, { id: uuidv4(), text: todoText, checked: false }];
    });
    todoInput.current.value = null;
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

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

  return (
    <div>
      <div className="totalTodos">Items: {todos.length}</div>
      <div className="unfinishedTodos">
        Unfinished:
        {todos.filter((todo) => todo.checked === false).length}
      </div>
      <label htmlFor="todoInput">What would you like to do?</label>
      <input type="text" name="todoInput" id="todoInput" placeholder="add your task" ref={todoInput} />
      <button className="addTodo" onClick={addTodo}>
        Add Todo
      </button>
      <ul className="todoList">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={() => {
              deleteTodo(todo.id);
            }}
            onToggle={() => {
              toggleTodo(todo.id);
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
