import React from "react";

const Todo = (props) => {
  return (
    <li>
      <p>{props.todo.text}</p>
      <button onClick={props.onToggle}>Finished</button>
      <button onClick={props.onDelete}>Delete</button>
    </li>
  );
};

export default Todo;
