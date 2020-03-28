var formE1 = document.querySelector("#task-form");
var tasksToDoEd1 = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

    event.preventDefault();
    console.log(event);

    var listItemE1 = document.createElement("li");
    listItemE1.className = "task-item";
    listItemE1.textContent = "This is a new task.";
    tasksToDoEd1.appendChild(listItemE1);
};    
    
formE1.addEventListener("submit", createTaskHandler);

// console.log(buttonEl);

// buttonEl.addEventListener("click", function() {
//     alert("button clicked");
//   });