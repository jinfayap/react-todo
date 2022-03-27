import React from "react";
import TodoFilters from "./TodoFilters";

const TodoFooter = ({ filter, setFilter, clearCompleted }) => {
  return (
    <footer className="mt-4 flex justify-between items-start">
      <TodoFilters filter={filter} setFilter={setFilter} />

      <span
        className="border px-2 py-1 rounded-md border-black cursor-pointer"
        onClick={clearCompleted}
      >
        Clear Completed
      </span>
    </footer>
  );
};

export default TodoFooter;
