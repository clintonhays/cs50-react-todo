import React, { Component, useRef, useState } from "react";
import Todo from "./Todo";
import "../css/styles.css";

let id = 0;

const App = () => {
  const [todos, setTodos] = useState([]);
  const todoText = useRef("");

  const addTodo = () => {
    const text = prompt("What would you like to do?");

    setTodos((prevState) => {
      return [...prevState, { id: id++, text: text, checked: false }];
    });
  };

  const deleteTodo = (id) => {
    todos.filter((todo) => todo.id !== id);
  };

  const toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id !== id) return todo;
        else {
          return { id: todo.id, text: todo.text, checked: !todo.checked };
        }
      }),
    });
  };

  return (
    <div>
      <div className="totalTodos">Items: {todos.length}</div>
      <div className="unfinishedTodos">
        Unfinished:
        {todos.filter((todo) => todo.checked === false).length}
      </div>
      {/* <label htmlFor="todoInput">What would you like to do?</label>
      <input type="text" name="todoInput" id="todoInput" placeholder="add your task" ref={todoText} /> */}
      <button className="addTodo" onClick={addTodo}>
        Add Todo
      </button>
      <ul className="todoList">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo(todo.id)}
            onToggle={() => {
              this.toggleTodo(todo.id);
            }}
          />
        ))}
      </ul>
    </div>
  );
};

// const App = () => {
//   const [count, setCount] = useState(4);

//   const decrementCount = () => {
//     setCount((prevCount) => prevCount - 1);
//   };

//   const incrementCount = () => {
//     setCount((prevCount) => prevCount + 1);
//   };

//   return (
//     <div>
//       <button onClick={decrementCount}>-</button>
//       <span>{count}</span>
//       <button onClick={incrementCount}>+</button>
//     </div>
//   );
// };

export default App;
