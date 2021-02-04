import React, { Component } from "react";
import Todo from "./Todo";
import "../css/styles.css";

let id = 0;

class App extends Component {
  state = {
    todos: [],
  };

  addTodo() {
    const text = prompt("What would you like to do?");

    this.setState({
      todos: [...this.state.todos, { id: id++, text: text, checked: false }],
    });
  }

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <div className="totalTodos">Items: {todos.length}</div>
        <div className="unfinishedTodos">Completed: unchecked</div>
        <button
          className="addTodo"
          onClick={() => {
            this.addTodo();
          }}
        >
          Add Todo
        </button>
        <ul className="todoList">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onDelete={() => {
                this.deleteTodo(todo.id);
              }}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
