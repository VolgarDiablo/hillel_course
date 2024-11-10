import React, { useState } from "react";
import useStore from "../store";

const ToDo = () => {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState("");
  const tasks = useStore((state) => state.tasks);
  const addTask = useStore((state) => state.addTask);
  const clearTasks = useStore((state) => state.clearTasks);

  const onSubmit = (e) => {
    e.preventDefault();

    if (inputText.trim() === "") {
      setError("Поле не может быть пустым");
      return;
    }
    if (inputText.length < 5) {
      setError("Текст должен быть не менее 5 символов");
      return;
    }
    if (tasks.some((task) => task.text === inputText)) {
      setError("Эта задача уже в списке!");
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      text: inputText,
      timeCreateTask: new Date().toLocaleString(),
    };

    addTask(newTask);
    setInputText("");
    setError("");
  };

  return (
    <div>
      <div className="bg-gray-200 p-8 text-gray-800 text-center">
        <h2 className="text-2xl mb-4">My To Do List</h2>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Title..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-3/4 p-2 border-none rounded-none text-base bg-gray-100 text-gray-900"
          />
          <button
            type="submit"
            className="w-1/4 p-2 bg-blue-500 text-white text-base cursor-pointer transition duration-300 rounded-none hover:bg-blue-600"
          >
            Add
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

      <ul className="list-none p-0">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="relative p-3 pl-10 bg-white text-gray-800 text-lg cursor-pointer transition duration-200 user-select-none hover:bg-gray-100"
          >
            {task.text}
          </li>
        ))}
      </ul>

      <footer className="text-gray-800 p-4 text-center">
        Total: {tasks.length}
        <button
          onClick={clearTasks}
          className="ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Clear ToDo
        </button>
      </footer>
    </div>
  );
};

export default ToDo;
