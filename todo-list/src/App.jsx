import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleAddTask = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Filter Logic
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // all
  });

  return (
    <div className="app-container">
      <h1 className="title">Todo App</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      {/* Filter Buttons */}
      <div className="filter-section">
        <button
          className={filter === "all" ? "active-filter" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={filter === "active" ? "active-filter" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>

        <button
          className={filter === "completed" ? "active-filter" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      <ul className="todo-list">
        {filteredTodos.length === 0 ? (
          <p className="empty-text">There are no tasks..!</p>
        ) : (
          filteredTodos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
              />
            <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
              {todo.text}
            </span>

              <button
                className="delete-btn"
                onClick={() => handleDelete(todo.id)}
              >
                ✕
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;