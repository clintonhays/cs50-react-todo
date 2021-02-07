import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const AddForm = () => {
  const todoInput = useRef("");

  const inputTodo = (e) => {
    const todoText = todoInput.current.value;
    if (todoText === "") return;
    setTodos((prevState) => {
      return [...prevState, { id: uuidv4(), text: todoText, checked: false }];
    });
    todoInput.current.value = null;
    todoInput.current.focus();
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={inputTodo}>
        <label htmlFor="todoInput">What would you like to do?</label>
        <input type="text" name="todoInput" id="todoInput" placeholder="add your task" ref={todoInput} />
        <button className="addTodo" onClick={inputTodo}>
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddForm;
