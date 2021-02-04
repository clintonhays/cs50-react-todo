import React from "react";

const Todo = (props) => {
  return (
    <li>
      <p>{props.todo.text}</p>
      <input type="checkbox" onClick={props.onToggle} />
      <button onClick={props.onDelete}>Delete</button>
    </li>
  );
};

export default Todo;
