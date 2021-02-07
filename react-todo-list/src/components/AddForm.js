import React, { useRef } from "react";

const AddForm = (props) => {
  const todoInput = useRef("");

  const addTodo = (e) => {
    props.addTodo(todoInput.current.value);
    todoInput.current.value = null;
    todoInput.current.focus();
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <label htmlFor="todoInput">What would you like to do?</label>
        <input type="text" name="todoInput" id="todoInput" placeholder="add your task" ref={todoInput} />
        <button className="addTodo" onClick={addTodo}>
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddForm;
