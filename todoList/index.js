

const taskForm = document.querySelector(".task-form");
const taskList = document.querySelector("#task-list");
let tasks = [];

// Define a Task class to represent each task
class Task {
  constructor(name, startDate, endDate) {
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  // Method to display the task information
  displayTask() {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `
      <div>${this.name}</div>
      <div>Start Date: ${this.startDate}</div>
      <div>End Date: ${this.endDate}</div>
      <button class="delete-task">Delete</button>
    `;
    taskList.appendChild(taskItem);
    taskItem
    .querySelector(".delete-task")
    .addEventListener("click", () => taskList.remove());
  }
}

// Function to add a new task
function addTask(name, startDate, endDate) {
  const task = new Task(name, startDate, endDate);
  tasks.push(task);
  task.displayTask();
}

taskForm.addEventListener("submit", e => {
  e.preventDefault();
  const taskName = document.querySelector("#task-name").value;
  const startDate = document.querySelector("#start-date").value;
  const endDate = document.querySelector("#end-date").value;
  if (taskName && startDate && endDate) {
    addTask(taskName, startDate, endDate);
  }
});
  

// const deletebutton = document.querySelector("#delete")
// deletebutton.addEventListener("click",function(){
//   taskList.remove()
// })

// Deleting task

  // li.textContent = task;
  // const deleteButton = document.createElement("button");
  // deleteButton.textContent = "Delete";

  // deleteButton.addEventListener("click", function () {
  //   li.remove();
  // });

  // li.appendChild(deleteButton);
  // todoList.appendChild(li);
  // input.value = "";

