import React from "react";
import Buttons from "./Buttons";

const Todo = (props) => {
  const toggleTodo = () => {
    props.toggleTodo(props.todo.id);
  };

  const deleteTodo = () => {
    props.deleteTodo(props.todo.id);
  };

  return (
    <li className="todoItem">
      <p className="todoText">{props.todo.text}</p>
      <Buttons todoId={props.todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      {/* <input type="checkbox" onChange={toggleTodo} /> */}
    </li>
  );
};

export default Todo;
