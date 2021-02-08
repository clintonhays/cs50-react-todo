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
    <div className="todoButtons">
      <button
        onClick={() => {
          toggleTodo();
          toggleComplete();
        }}
      >
        {complete ? "Complete" : "Incomplete"}
      </button>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
};

export default Buttons;
