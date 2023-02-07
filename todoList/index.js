const form = document.querySelector("form");
const input = document.querySelector("#task");
const todoList = document.querySelector("#todolist");

form.addEventListener("submit", addTask);

// adding task

function addTask(e) {
  e.preventDefault();
  const task = input.value;
  if (!task) return;
  const li = document.createElement("li");
  li.innerHTML = task;
  todoList.appendChild(li);

// Deleting task

  li.textContent = task;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(deleteButton);
  todoList.appendChild(li);
  input.value = "";
}
