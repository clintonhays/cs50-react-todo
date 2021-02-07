import React from "react";

const Buttons = (props) => {
  const toggleTodo = () => {
    props.toggleTodo(props.id);
  };

  const deleteTodo = () => {
    props.deleteTodo(props.id);
  };

  return (
    <div>
      <button onClick={toggleTodo}>Finished</button>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
};

export default Buttons;
