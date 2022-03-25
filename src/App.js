import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      body: "Task 1",
      completed: false,
      isEditing: false,
    },
    {
      id: 2,
      body: "Task 2",
      completed: false,
      isEditing: false,
    },
    {
      id: 3,
      body: "Task 3",
      completed: false,
      isEditing: false,
    },
  ]);

  const [todoId, setTodoId] = useState(4);

  const [todo, setTodo] = useState("");

  const updateUserInput = (e) => {
    setTodo((prevTodo) => e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return;

    setTodos((prevTodos) => [...prevTodos, { id: todoId, body: todo }]);
    setTodo("");
    setTodoId((prevTodoId) => prevTodoId + 1);
  };

  const handleChange = (e, id) => {
    const { name, value, checked } = e.target;
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            [name]: name === "completed" ? checked : value,
          };
        }
        return todo;
      });
    });
  };

  const enableEditing = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: true } : todo
      )
    );
  };

  const disableEditing = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: false } : todo
      )
    );
  };

  const updateTodo = (e, id) => {
    if (e.key === "Enter") {
      const { name, value } = e.target;

      if (value.trim() === "") return disableEditing(id);

      setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              [name]: value,
            };
          }
          return todo;
        });
      });

      disableEditing(id);
    } else if (e.key === "Escape") {
      disableEditing(id);
    }
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1 className="text-center font-bold text-3xl">Todo List Application</h1>

      <main className="container mt-4">
        <div className="max-w-4xl mx-auto border border-black rounded-lg px-6 py-6">
          <header>
            <h2 className="font-semibold text-2xl text-center mb-2">
              Add a new Todo
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="rounded-md w-full"
                value={todo}
                onChange={updateUserInput}
                placeholder="What do you need to complete...? (Press '/' to focus)"
              />
            </form>
          </header>

          <div className="mt-4">
            <ul className="space-y-4 border border-black rounded-md px-2 py-2 divide-y">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className="flex justify-around items-center  border-black px-2 py-1 "
                >
                  <input
                    type="checkbox"
                    className="rounded-md px-2 py-2 cursor-pointer"
                    value={todo.completed}
                    name="completed"
                    onChange={(e) => handleChange(e, todo.id)}
                  />
                  {!todo.isEditing ? (
                    <div
                      className={`flex-1 px-4 py-1 ${
                        todo.completed ? "line-through text-gray-400" : ""
                      }`}
                      onDoubleClick={() => enableEditing(todo.id)}
                    >
                      {todo.body}
                    </div>
                  ) : (
                    <input
                      type="text"
                      className="flex-1 px-4 py-1 ml-1 rounded h-full"
                      defaultValue={todo.body}
                      autoFocus
                      onKeyDown={(e) => updateTodo(e, todo.id)}
                      onBlur={() => disableEditing(todo.id)}
                      name="body"
                    />
                  )}
                  <span
                    className="cursor-pointer text-2xl text-red-400 hover:text-red-500"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    &times;
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <footer className="mt-4 flex justify-between items-start">
            <div className="space-x-2">
              <span className="border px-2 py-1 rounded-md border-black cursor-pointer">
                All
              </span>
              <span className="px-2 py-1 rounded-md border-black cursor-pointer">
                Active
              </span>
              <span className="px-2 py-1 rounded-md border-black cursor-pointer">
                Completed
              </span>
            </div>

            <div>
              <span className="border px-2 py-1 rounded-md border-black cursor-pointer">
                Clear Completed
              </span>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;
