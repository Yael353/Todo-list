import React from "react";
import "./TodoItem.css";

export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="todo-lista">
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.title}
      </span>
      <button onClick={() => toggleTodo(todo.id, !todo.done)}>
        {todo.done ? "Uppgift utförd" : "Kvar att göra"}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>Ta bort</button>
    </div>
  );
}
