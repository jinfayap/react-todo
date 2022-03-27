import React from "react";

const TodoFilters = ({ filter, setFilter }) => {
  return (
    <div className="space-x-2">
      <span
        className={`px-2 py-1 rounded-md border-black cursor-pointer ${
          filter === "all" ? "border" : ""
        }`}
        onClick={() => setFilter("all")}
      >
        All
      </span>
      <span
        className={`px-2 py-1 rounded-md border-black cursor-pointer ${
          filter === "active" ? "border" : ""
        }`}
        onClick={() => setFilter("active")}
      >
        Active
      </span>
      <span
        className={`px-2 py-1 rounded-md border-black cursor-pointer ${
          filter === "completed" ? "border" : ""
        }`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </span>
    </div>
  );
};

export default TodoFilters;
