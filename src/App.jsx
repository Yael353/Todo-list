import { useState } from "react";
import TodoItem from "./TodoItem";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState("");

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    setNewTodoText("");
  };

  const toggleTodo = (id, done) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div id="container">
      <h1>Min att-göra lista</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Lägg till uppgift."
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button
          onClick={() =>
            addTodo({ id: todos.length + 1, title: newTodoText, done: false })
          }
        >
          Lägg till
        </button>
      </div>
      <div className="buttonContainer">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
