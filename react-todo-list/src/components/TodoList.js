import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <div>
      <ul className="todoList">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={() => {
              deleteTodo(todo.id);
            }}
            onToggle={() => {
              toggleTodo(todo.id);
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
