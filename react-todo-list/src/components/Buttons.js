import React, { useState } from "react";

const Buttons = (props) => {
  const [complete, setComplete] = useState(false);

  const toggleComplete = () => {
    setComplete(!complete);
  };

  const toggleTodo = () => {
    props.toggleTodo(props.id);
  };

  const deleteTodo = () => {
    props.deleteTodo(props.id);
  };

  return (
    <div>
      <button
        onClick={() => {
          toggleTodo();
          toggleComplete();
        }}
      >
        {complete ? "Complete" : "Inomplete"}
      </button>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
};

export default Buttons;
