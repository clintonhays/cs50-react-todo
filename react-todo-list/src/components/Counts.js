import React from "react";

const Counts = () => {
  return (
    <div>
      <div className="totalTodos">
        <h2>Items: {todos.length}</h2>
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
