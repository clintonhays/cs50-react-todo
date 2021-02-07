import React, { useState } from "react";
import Counts from "./Counts";
import AddForm from "./AddForm";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import "../css/styles.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (text === "") return;
    setTodos((prevState) => {
      return [...prevState, { id: uuidv4(), text: text, checked: false }];
    });
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        else {
          return { id: todo.id, text: todo.text, checked: !todo.checked };
        }
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <header>
        <h1>React Todo List</h1>
      </header>
      <Counts todos={todos} />
      <AddForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

// const App = () => {
//   const [buttonText, setButtonText] = useState("yes");

//   const toggleButton = () => {
//     if (buttonText === "yes") {
//       setButtonText("no");
//     } else {
//       setButtonText("yes");
//     }
//   };

//   return (
//     <div>
//       <button onClick={toggleButton}>
//         {buttonText} {/* yes */}
//       </button>
//     </div>
//   );
// };

export default App;
