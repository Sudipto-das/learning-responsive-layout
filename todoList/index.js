const form = document.querySelector("form");
// const input = document.querySelector("#task");
const todoList = document.querySelector("#todolist");
let tasks=[]

// form.addEventListener("submit", addTask);
// Define a Task class to represent each task
class Task {
  constructor(name, startDate, endDate) {
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
  }
   // Method to display the task information
   displayTask() {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `
      <div>${this.name}</div>
      <div>Start Date: ${this.startDate}</div>
      <div>End Date: ${this.endDate}</div>
    `;
    todoList.appendChild(taskItem);
    console.log("task added")
  }
}
function addTask(name, startDate, endDate){
  const task = new Task(name, startDate, endDate);
  tasks.push(task);
  task.displayTask
}

  

form.addEventListener("submit", e => {
  e.preventDefault();
  const taskName = document.querySelector("#task").value;
  const startDate = document.querySelector("#startdate").value;
  const endDate = document.querySelector("#enddate").value;
  if (taskName && startDate && endDate) {
    addTask(taskName, startDate, endDate);
  }
});

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

