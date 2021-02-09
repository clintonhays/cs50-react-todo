import React, { useState } from "react";

const Buttons = (props) => {
  const [complete, setComplete] = useState(false);
  // const

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
        className="completeButton"
        onClick={() => {
          toggleTodo();
          toggleComplete();
        }}
      >
        {complete ? <i className="lni lni-checkmark-circle"></i> : <i className="lni lni-spiner-solid"></i>}
      </button>
      <button className="deleteButton" onClick={deleteTodo}>
        <i className="lni lni-trash"></i>
      </button>
    </div>
  );
};

export default Buttons;
