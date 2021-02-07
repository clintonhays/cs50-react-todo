import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div>
      <ul className="todoList">
        {props.todos.map((todo) => (
          <Todo key={todo.id} todo={todo} deleteTodo={props.deleteTodo} toggleTodo={props.toggleTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
