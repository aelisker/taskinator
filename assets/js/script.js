var buttonEl = document.querySelector("#save-task");
var tasksToDoEd1 = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listItemE1 = document.createElement("li");
    listItemE1.className = "task-item";
    listItemE1.textContent = "This is a new task.";
    tasksToDoEd1.appendChild(listItemE1);
};    
    
buttonEl.addEventListener("click", createTaskHandler);

// console.log(buttonEl);

// buttonEl.addEventListener("click", function() {
//     alert("button clicked");
//   });