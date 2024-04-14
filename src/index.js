document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission behavior

      // Get the input value
      const taskDescriptionInput = document.getElementById("new-task-description");
      const taskDescription = taskDescriptionInput.value;

      // Do something with the task description, e.g., add it to a list
      addTaskToList(taskDescription);

      // Reset the input field
      taskDescriptionInput.value = "";
  });
});