// Selectors
const task = document.querySelector(".todo-input");
const addButton = document.querySelector(".todo-add-button");
const todoList = document.querySelector(".todo-list");

addButton.addEventListener("click", addNewTask);

/*
 *
 *
 *
 *
 * Functions
 *
 *
 */

function addNewTask(event) {
  event.preventDefault();

  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container");
  const newTask = document.createElement("li");
  newTask.innerHTML = task.value;
  const complete = document.createElement("button");
  complete.innerHTML = "DONE";
  const remove = document.createElement("button");
  remove.innerHTML = "REMOVE";

  //   Remove Tasks
  remove.addEventListener("click", (e) => {
    removeTask(e);
    taskContainer.classList.add("remove-animation");
  });

  //   Complete Tasks
  complete.addEventListener("click", completeTask);

  newTask.classList.add("new-task");
  remove.classList.add("remove-task");
  complete.classList.add("complete-task");
  taskContainer.appendChild(newTask);
  taskContainer.appendChild(complete);
  taskContainer.appendChild(remove);
  todoList.appendChild(taskContainer);
  task.value = "";
}

function removeTask(e) {
  setTimeout(() => {
    e.target.parentElement.remove();
  }, 500);
}

function completeTask(e) {
  e.target.parentElement.classList.toggle("finish-task");
}
