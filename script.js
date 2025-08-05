let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
addBtn.addEventListener("click", () => {
  let taskText = taskInput.value;
  if (taskText.length > 0) {
    let li = document.createElement("li");
    let taskSpan = document.createElement("span");
    taskSpan.innerText = taskText;
    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.addEventListener("click", () => {
      li.remove();
    });
    // Append task and button to li
    li.appendChild(taskSpan);
    li.appendChild(removeBtn);
    // Append li to task list
    taskList.appendChild(li);
    // Clear input
    taskInput.value = "";
  }
});
