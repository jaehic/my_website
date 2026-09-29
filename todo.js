let currentTask = 1; // start with Task 1

document.getElementById("todo-form").addEventListener("submit", function(e) {
  e.preventDefault(); // stop page reload

  const input = document.getElementById("todo-input").value.trim();

  if (input !== "" && currentTask <= 6) {
    // find current task span
    const taskSpan = document.getElementById("task" + currentTask);

    // update its text
    taskSpan.textContent = input;

    // move to next task
    currentTask++;
  } else if (currentTask > 6) {
    alert("All tasks are already filled!");
  }

  // clear input
  document.getElementById("todo-input").value = "";
});