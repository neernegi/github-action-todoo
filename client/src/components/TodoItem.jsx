import React from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span onClick={() => toggleComplete(todo._id, !todo.completed)}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo._id)}>❌</button>
    </div>
  );
};

export default TodoItem;
