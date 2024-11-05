import React, { useState, useEffect } from "react";
import styles from "./main.module.css";

function Main() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  };

  const handleAddTask = () => {
    if (inputText.trim() === "") {
      alert("You must write something!");
      return;
    }

    if (tasks.some((task) => task.text === inputText)) {
      alert("This task is already in the list!");
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      text: inputText,
      checked: false,
      timeCreateTask: formatDate(new Date()),
    };

    setTasks([...tasks, newTask]);
    setInputText("");
  };

  const handleToggleCheck = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <div className={styles.header}>
        <h2>My To Do List</h2>
        <input
          type="text"
          placeholder="Title..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleAddTask} className={styles.addBtn}>
          Add
        </button>
      </div>

      <ul className={styles.listTodo}>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`${styles.listItem} ${
              task.checked ? styles.checked : ""
            }`}
            onClick={() => handleToggleCheck(task.id)}
          >
            {task.text}
            <span
              className={styles.close}
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteTask(task.id);
              }}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
