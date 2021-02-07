import React, { useState, useRef } from "react";
import Counts from "./Counts";
import AddForm from "./AddForm";
import TodoList from "./TodoList";
import "../css/styles.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <header>
        <h1>React Todo List</h1>
      </header>
      <Counts />
      <AddForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

// const deleteTodo = (id) => {
//   setTodos(todos.filter((todo) => todo.id !== id));
// };

// const toggleTodo = (id) => {
//   setTodos(
//     todos.map((todo) => {
//       if (todo.id !== id) return todo;
//       else {
//         return { id: todo.id, text: todo.text, checked: !todo.checked };
//       }
//     })
//   );
// };

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
