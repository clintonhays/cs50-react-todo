import React from "react";
import Buttons from "./Buttons";

const Todo = (props) => {
  const toggleTodo = () => {
    props.toggleTodo(props.todo.id);
  };

  return (
    <li>
      <p>{props.todo.text}</p>
      {/* <Buttons todos={props.todos} /> */}
      <input type="checkbox" onChange={toggleTodo} />
    </li>
  );
};

export default Todo;
