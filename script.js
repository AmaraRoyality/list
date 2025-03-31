// Get references to DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Event listener to add a task
addTaskButton.addEventListener("click", function() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <button class="delete-btn">Delete</button>
    `;

    // Add the new task to the list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";

    // Add event listener to mark as completed
    li.addEventListener("click", function() {
      li.classList.toggle("completed");
    });

    // Add event listener to delete the task
    const deleteButton = li.querySelector(".delete-btn");
    deleteButton.addEventListener("click", function(event) {
      event.stopPropagation(); // Prevent triggering the task completion
      li.remove();
    });
  }
});

// Optional: Allow pressing Enter to add a task
taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTaskButton.click();
  }
});
