
// Comment 1:
let tasks = [
{ task: "Buy groceries", completed: false },
{ task: "Finish homework", completed: false },
{ task: "Clean the house", completed: true },
{ task: "Call Mom", completed: false }
];
// Comment 2:
function displayTasks() {
// Get the <ul> element to add tasks to
const todolist = document.getElementById("todoList");

// Comment 3:
todoList.innerHTML = "";

// Comment 4:
for (let i = 0; i < tasks.length; i++) {
let li = document.createElement("li");

// Comment 5:
if (tasks[i].completed) {
li.classList.add("completed");
}

// Comment 6:
let taskText = document.createElement("span");
taskText.textContent = tasks[i].task;

// Comment 7:
let toggleButton = document.createElement("button");
toggleButton.textContent = tasks[i].completed ? "Undo" : "Complete";

// Comment 8:
toggleButton.addEventListener("click", function() {
tasks[i].completed = !tasks[i].completed; // Comment 9:
displayTasks(); // Comment 10:
});

// Comment 11:
li.appendChild(taskText);
li.appendChild(toggleButton);

// Comment 12:
todoList.appendChild(li);

}
}

// Comment 13:
document.getElementById("addTaskBtn").addEventListener("click", function() {
let newTask = prompt("Enter a new task: ");
if (newTask) {
tasks.push({ task: newTask, completed: false });
displayTasks(); // Comment 14:
}
});
// Comment 15:
displayTasks(); 