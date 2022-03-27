import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const clearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  return (
    <div>
      <h1 className="text-center font-bold text-3xl">Todo List Application</h1>

      <main className="container mt-4">
        <div className="max-w-4xl mx-auto border border-black rounded-lg px-6 py-6">
          <TodoInput setTodos={setTodos} />

          <div className="mt-4">
            <TodoList filter={filter} setTodos={setTodos} todos={todos} />
          </div>

          <TodoFooter
            filter={filter}
            setFilter={setFilter}
            clearCompleted={clearCompleted}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
