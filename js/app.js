// Selectors
const task = document.querySelector(".todo-input");
const addButton = document.querySelector(".todo-add-button");
const todoList = document.querySelector(".todo-list");

const filters = document.getElementsByTagName("select")[0];

document.addEventListener("DOMContentLoaded", getTasks);
addButton.addEventListener("click", addNewTask);
filters.addEventListener("click", filterProcess);
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

  // SAVE TO THE LOCAL STORAGE
  saveTasks(task.value);
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
  // deleteTasks(task.value);
  setTimeout(() => {
    e.target.parentElement.remove();
  }, 500);
}

function completeTask(e) {
  e.target.parentElement.classList.toggle("finish-task");
}

function filterProcess(e) {
  todoList.childNodes.forEach((task) => {
    const target = e.target.value;
    if (target === "all") {
      task.style.display = "flex";
    } else if (target === "completed") {
      task.classList.contains("finish-task")
        ? (task.style.display = "flex")
        : (task.style.display = "none");
    } else {
      task.classList.contains("finish-task")
        ? (task.style.display = "none")
        : (task.style.display = "flex");
    }
  });
}

// Save A LOCAL STORAGe
function saveTasks(task) {
  let todos; // todos or not
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(task);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Delete tasks from local storage
function getTasks() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach((task) => {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    const newTask = document.createElement("li");
    newTask.innerHTML = task;
    const complete = document.createElement("button");
    complete.innerHTML = "DONE";
    const remove = document.createElement("button");
    remove.innerHTML = "REMOVE";

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
  });
}
