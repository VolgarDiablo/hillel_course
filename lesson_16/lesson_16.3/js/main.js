const listToDo = document.getElementById("myUL");
const addButton = document.getElementById("addBtn");
const inputText = document.getElementById("myInput");

addButton.addEventListener("click", addNewTodoItem);
listToDo.addEventListener("click", handleListClick);

function addNewTodoItem() {
  const todoText = inputText.value.trim();

  if (todoText === "") {
    alert("You must write something!");
    return;
  }

  if (isTodoAlreadyExists(todoText)) {
    alert("This task is already in the list!");
    return;
  }

  const todoItem = createTodoItem(todoText);
  listToDo.appendChild(todoItem);
  inputText.value = "";
}

function isTodoAlreadyExists(todoText) {
  let itemsLiToDo = listToDo.getElementsByTagName("li");

  for (let i = 0; i < itemsLiToDo.length; i++) {
    let itemText = itemsLiToDo[i].textContent.replace("\u00D7", "").trim();
    if (itemText === todoText) {
      return true;
    }
  }
  return false;
}

function createTodoItem(text) {
  const li = document.createElement("li");
  li.textContent = text;

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
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  } else if (event.target.className === "close") {
    event.target.parentElement.remove();
  }
}