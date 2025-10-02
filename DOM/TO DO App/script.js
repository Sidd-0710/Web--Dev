let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function() {
  let taskText = input.value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = taskText;

  let completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  input.value = "";

  completeBtn.addEventListener("click", function() {
    li.style.textDecoration =
      li.style.textDecoration === "line-through" ? "none" : "line-through";
  });

  deleteBtn.addEventListener("click", function() {
    li.remove();
  });
});
