document.addEventListener("DOMContentLoaded", () => {
  // first select the form
  const form = document.getElementById("create-task-form");

  // second add an event listener for when a form is submitted
  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    // third Get the value from the input box
    const input = document.getElementById("new-task-description");
    const task = input.value.trim(); 

    // fourth only add if input is not empty
    if (task !== "") {
      const li = document.createElement("li");
      li.textContent = task;

      // fifth append the new task to the task list
      const taskList = document.getElementById("tasks");
      taskList.appendChild(li);

      // sixth reset input box
      input.value = "";
    }
  });
 
});
