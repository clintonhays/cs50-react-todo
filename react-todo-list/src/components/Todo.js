import React from "react";

const Todo = (props) => {
  return (
    <li>
      <p>{props.todo.text}</p>
      <input type="checkbox" />
      <button onClick={props.onDelete}>Delete</button>
      <button>Finish</button>
    </li>
  );
};

export default Todo;
