const listToDo = document.getElementById("myUL");
const addButton = document.getElementById("addBtn");
const inputText = document.getElementById("myInput");

addButton.addEventListener("click", addNewTodoItem);
listToDo.addEventListener("click", handleListClick);

function getTasks() {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
}

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}

function isTodoAlreadyExists(todoText) {
  const tasks = getTasks();
  return tasks.some((task) => task.text === todoText);
}

function addNewTodoItem() {
  const tasks = getTasks();
  const todoText = inputText.value.trim();

  if (todoText === "") {
    alert("You must write something!");
    return;
  }

  if (isTodoAlreadyExists(todoText)) {
    alert("This task is already in the list!");
    return;
  }

  const aboutNewTask = {
    id: tasks.length + 1,
    text: todoText,
    checked: false,
    timeCreateTask: formatDate(new Date()),
  };

  tasks.push(aboutNewTask);
  saveTasks(tasks);

  const todoItem = createTodoItem(todoText, aboutNewTask.id);
  listToDo.appendChild(todoItem);
  inputText.value = "";
}

function createTodoItem(text, id, checked = false) {
  const li = document.createElement("li");
  li.textContent = text;
  li.dataset.id = id;

  if (checked) {
    li.classList.add("checked");
  }

  const closeBtn = createCloseButton();
  li.appendChild(closeBtn);

  return li;
}

function createCloseButton() {
  const span = document.createElement("span");
  span.className = "close";
  span.textContent = "\u00D7";
  return span;
}

function handleListClick(event) {
  const tasks = getTasks();

  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");

    const taskId = event.target.dataset.id;
    const task = tasks.find((t) => t.id == taskId);
    if (task) {
      task.checked = !task.checked;
      saveTasks(tasks);
    }
  } else if (event.target.className === "close") {
    const li = event.target.parentElement;
    const taskId = li.dataset.id;
    li.remove();

    const updatedTasks = tasks.filter((task) => task.id != taskId);
    saveTasks(updatedTasks);
  }
}

function renderTasks() {
  const tasks = getTasks();
  listToDo.innerHTML = "";

  tasks.forEach((task) => {
    const todoItem = createTodoItem(task.text, task.id, task.checked);
    listToDo.appendChild(todoItem);
  });
}

window.onload = function () {
  renderTasks();
};
