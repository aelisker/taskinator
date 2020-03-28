var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
    event.preventDefault();
    console.log(event);

    //get value of input field when submit is hit
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    console.log(taskNameInput);

    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    console.log(taskTypeInput);

    //package data as object
    var taskFormData = {
        name: taskNameInput,
        type: taskTypeInput
    };

    //sent it as arguement to createTaskEl
    createTaskEl(taskFormData);
};   

var createTaskEl = function(taskDataObj) {
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
}
    
formEl.addEventListener("submit", taskFormHandler);

// console.log(buttonEl);

// buttonEl.addEventListener("click", function() {
//     alert("button clicked");
//   });