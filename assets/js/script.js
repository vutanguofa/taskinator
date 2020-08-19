var buttonEl = document.querySelector("#save-task");
var taskToDoEl = document.querySelector("#tasks-to-do");

buttonEl.addEventListener("click", createTaskHandler);
var createTaskHandler = function() {
    var taskItemEl = document.createElement("li");
    taskItemEl.className = "task-item";
    taskItemEl.textContent = "Clean bathroom";
    taskToDoEl.appendChild(taskItemEl);
};
