import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  // Fetch todos
  useEffect(() => {
    fetch(`${API_URL}/api/todos`)
      .then(res => res.json())
      .then(data => setTodos(data));
  }, [API_URL]);

  const addTodo = async (text) => {
    const res = await fetch(`${API_URL}/api/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });
    const newTodo = await res.json();
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = async (id, completed) => {
    const res = await fetch(`${API_URL}/api/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed })
    });
    const updatedTodo = await res.json();
    setTodos(todos.map(todo => (todo._id === updatedTodo._id ? updatedTodo : todo)));
  };

  const deleteTodo = async (id) => {
    await fetch(`${API_URL}/api/todos/${id}`, {
      method: "DELETE"
    });
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <div className="container">
      <h1>📝 My TODO List</h1>
      <TodoForm addTodo={addTodo}
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
