import React from "react";

const Counts = ({ todos }) => {
  return (
    <div className="countContainer">
      <div className="totalTodos">
        <h2>Tasks: {todos.length}</h2>
      </div>
      <div className="unfinishedTodos">
        <h2>
          Unfinished:
          {todos.filter((todo) => todo.checked === false).length}
        </h2>
      </div>
    </div>
  );
};

export default Counts;
