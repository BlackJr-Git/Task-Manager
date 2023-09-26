//SELECTORS
const taskInput = document.querySelector(".task-input");
const taskButton = document.querySelector(".task-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-task");

const nouvelleTache = document.getElementById("newtask");
const inputForm = document.querySelector(".add-Task");

// LISTENERS
taskButton.addEventListener("click", addTask);
todoList.addEventListener("click", deleteCheck);
// filterOption.addEventListener("input", filterTask);

nouvelleTache.addEventListener("click", showInputTaskForm);

// FUNCTIONS

function showInputTaskForm(e) {
  e.preventDefault();
  inputForm.style.display = "block" ;
}

function addTask(event) {
  event.preventDefault();
  // Task div
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  //Creer le Li
  newTask = document.createElement("li");
  newTask.innerText = taskInput.value;
  newTask.classList.add("todo-item");

  taskDiv.appendChild(newTask);
  // Button check
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<ion-icon name="checkmark"></ion-icon>';

  completedButton.classList.add("complete-btn");

  taskDiv.appendChild(completedButton);

  // Button Delete
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<ion-icon name="trash"></ion-icon>';

  trashButton.classList.add("trash-btn");

  taskDiv.appendChild(trashButton);

  // Add Task to TODOLIST
  todoList.appendChild(taskDiv);

  taskInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  // DELETE TASK
  if (item.classList[0] === "trash-btn") {
    const task = item.parentElement;
    task.classList.add("fall");

    task.addEventListener("transitionend", function () {
      task.remove();
    });
    // task.remove()
    // item.parentElement.remove();
  }

  // COMPLETE TASK
  if (item.classList[0] === "complete-btn") {
    const task = item.parentElement;
    task.classList.toggle("completed");
  }
}

function filterTask(e) {
  const tasks = todoList.childNodes;
  console.log(tasks);
}
