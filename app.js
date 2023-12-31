//SELECTORS
const taskInput = document.querySelector(".task-input");
const taskButton = document.querySelector(".task-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-task");

const nouvelleTache = document.getElementById("newtask");
const inputForm = document.querySelector(".add-Task");
const btnQuitAddTask = document.getElementById("quit-add-task");

const taskCount = document.getElementById("task-count");
const FinishedTaskCount = document.getElementById("finished-task-count");

const taskInfoInput = document.querySelector(".task-info-input");
const taskTitle = document.querySelector(".task-title");
const taskInfo = document.querySelector(".task-info");

// LISTENERS
taskButton.addEventListener("click", addTask);
taskButton.addEventListener("click", addTaskInfo);
todoList.addEventListener("click", deleteCheck);
// filterOption.addEventListener("input", filterTask);
nouvelleTache.addEventListener("click", showInputTaskForm);
btnQuitAddTask.addEventListener("click", function () {
  inputForm.classList.add("display-none");
});

// FUNCTIONS

function showInputTaskForm(e) {
  e.preventDefault();
  inputForm.classList.remove("display-none");
}

function addTaskInfo() {}

function addTask(event) {
  event.preventDefault();

  // Task div
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task-div");

  // Button check
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<ion-icon name="radio-button-off"></ion-icon>';
  completedButton.classList.add("complete-btn");
  taskDiv.appendChild(completedButton);

  //Creer le Li
  newTask = document.createElement("li");
  newTask.innerText = taskInput.value;
  newTask.classList.add("todo-item");
  taskDiv.appendChild(newTask);

  // Button Delete
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<ion-icon name="trash"></ion-icon>';
  trashButton.classList.add("trash-btn");
  taskDiv.appendChild(trashButton);

  //  Add Task Description
  const taskDescription = document.createElement("p");
  taskDescription.innerText = taskInfoInput.value;
  taskDescription.classList.add('display-none');
  taskDiv.appendChild(taskDescription);

  // Add Task to TODOLIST
  todoList.appendChild(taskDiv);

  // reinitialisation et compte
  taskInput.value = "";
  taskInfoInput.value = "";
  taskCount.innerText = parseInt(taskCount.innerText) + 1;
}

function deleteCheck(e) {
  const item = e.target;
  // DELETE TASK
  if (item.classList[0] === "trash-btn") {
    const task = item.parentElement;
    task.classList.add("slide");

    task.addEventListener("transitionend", function () {
      task.remove();
    });

    // task.remove()
    // item.parentElement.remove();
    if (taskCount.innerText > "0" && task.classList[1] === "slide") {
      taskCount.innerText = parseInt(taskCount.innerText) - 1;
    }
    if (task.classList[1] === "completed-task") {
      FinishedTaskCount.innerText = parseInt(FinishedTaskCount.innerText) - 1;
    }
  }

  // COMPLETE TASK
  if (item.classList[0] === "complete-btn") {
    const task = item.parentElement;
    task.classList.toggle("completed-task");

    if (taskCount.innerText > "0") {
      taskCount.innerText = parseInt(taskCount.innerText) - 1;
      FinishedTaskCount.innerText = parseInt(FinishedTaskCount.innerText) + 1;
    }
  }
}

function filterTask(e) {
  const tasks = todoList.childNodes;
  console.log(tasks);
}
