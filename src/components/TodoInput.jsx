import React, { useEffect, useRef, useState } from "react";

const TodoInput = ({ setTodos }) => {
  const [todo, setTodo] = useState("");
  const updateUserInput = (e) => {
    setTodo((prevTodo) => e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return;

    setTodos((prevTodos) => [
      ...prevTodos,
      { id: new Date(), body: todo, isEditing: false, completed: false },
    ]);
    setTodo("");
  };

  const focusTodoInput = useRef();

  useEffect(() => {
    function focusInput(e) {
      if (e.ctrlKey && e.keyCode === 191) {
        e.preventDefault();
        focusTodoInput.current.focus();
      }
    }
    document.addEventListener("keydown", focusInput);

    return () => {
      document.removeEventListener("keydown", focusInput);
    };
  }, []);

  return (
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
          placeholder="What do you need to complete...? (Press 'Ctrl + /' to focus)"
          ref={focusTodoInput}
        />
      </form>
    </header>
  );
};

export default TodoInput;
