import React from "react";
import "./index.css";

const App = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl">Todo List Application</h1>

      <main className="container mt-4">
        <div className="max-w-4xl mx-auto border border-black rounded-lg px-6 py-6">
          <header>
            <h2 className="font-semibold text-2xl text-center mb-2">
              Add a new Todo
            </h2>
            <input
              type="text"
              className="rounded-md w-full"
              placeholder="What do you need to complete...? (Press '/' to focus)"
            />
          </header>

          <div className="mt-4">
            <ul className="space-y-4 border border-black rounded-md px-2 py-2 divide-y">
              <li className="flex justify-around items-center  border-black px-2 py-1 ">
                <input
                  type="checkbox"
                  className="rounded-md px-2 py-2 cursor-pointer"
                />
                <div className="flex-1 px-4 py-1">Task 1</div>
                <span className="cursor-pointer text-2xl text-red-400 hover:text-red-500">
                  &times;
                </span>
              </li>
              <li className="flex justify-around items-center  border-black px-2 py-1">
                <input
                  type="checkbox"
                  className="rounded-md px-2 py-2 cursor-pointer"
                />
                <div className="flex-1 px-4 py-1">Task 1</div>
                <span className="cursor-pointer text-2xl text-red-400 hover:text-red-500">
                  &times;
                </span>
              </li>
            </ul>
          </div>

          <footer class="mt-4 flex justify-between items-start">
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
