import React from "react";

const TodoList = ({ todos, setTodos, filter }) => {
  const todoFiltered = () => {
    if (filter === "all") {
      return todos;
    } else if (filter === "active") {
      return todos.filter((todo) => !todo.completed);
    } else if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    }
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

  const evaluateToUpdate = (e, id) => {
    if (e.key === "Enter") {
      updateTodo(e, id);
    } else if (e.key === "Escape") {
      disableEditing(id);
    }
  };

  const updateTodo = (e, id) => {
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
  };

  const disableEditing = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: false } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <ul className="space-y-4 border border-black rounded-md px-2 py-2 divide-y">
      {todoFiltered().map((todo) => (
        <li
          key={todo.id}
          className="flex justify-around items-center  border-black px-2 py-1 "
        >
          <input
            type="checkbox"
            className="rounded-md px-2 py-2 cursor-pointer"
            checked={todo.completed}
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
              onKeyDown={(e) => evaluateToUpdate(e, todo.id)}
              onBlur={(e) => updateTodo(e, todo.id)}
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
  );
};

export default TodoList;
