
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");


addTaskButton.addEventListener("click", function() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <button class="delete-btn">Delete</button>
    `;

    
    taskList.appendChild(li);

    
    taskInput.value = "";

    
    li.addEventListener("click", function() {
      li.classList.toggle("completed");
    });

    
    const deleteButton = li.querySelector(".delete-btn");
    deleteButton.addEventListener("click", function(event) {
      event.stopPropagation(); 
      li.remove();
    });
  }
});


taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTaskButton.click();
  }
});
