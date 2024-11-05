import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const ToDo = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const taskSchema = z.object({
    inputText: z
      .string()
      .nonempty({ message: "Field cannot be empty" })
      .min(5, { message: "Input must be at least 5 characters long" })
      .refine((value) => !tasks.some((task) => task.text === value), {
        message: "This task is already in the list!",
      }),
  });

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(taskSchema),
  });

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

  const onSubmit = (data) => {
    try {
      const newTask = {
        id: tasks.length + 1,
        text: data.inputText,
        checked: false,
        timeCreateTask: formatDate(new Date()),
      };
      setTasks([...tasks, newTask]);
      reset();
    } catch (error) {
      setError("inputText", { type: "manual", message: error.message });
    }
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
      <div className="bg-gray-200 p-8 text-gray-800 text-center">
        <h2 className="text-2xl mb-4">My To Do List</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Title..."
            {...register("inputText")}
            className="w-3/4 p-2 border-none rounded-none text-base bg-gray-100 text-gray-900"
          />
          <button
            type="submit"
            className="w-1/4 p-2 bg-blue-500 text-white text-base cursor-pointer transition duration-300 rounded-none hover:bg-blue-600"
          >
            Add
          </button>
        </form>
        {errors.inputText && (
          <p className="text-red-500 mt-2">{errors.inputText.message}</p>
        )}
      </div>

      <ul className="list-none p-0">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`relative p-3 pl-10 bg-white text-gray-800 text-lg cursor-pointer transition duration-200 user-select-none hover:bg-gray-100 ${
              task.checked ? "bg-green-100 text-green-800 line-through" : ""
            }`}
            onClick={() => handleToggleCheck(task.id)}
          >
            {task.text}
            <span
              className="absolute top-0 right-0 p-3 text-gray-800 cursor-pointer hover:bg-red-500 hover:text-white"
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
};

export default ToDo;
