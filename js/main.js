const button = document.getElementById("toggle-btn");

button.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  button.textContent = document.body.classList.contains("dark-mode")
    ? "Bytt til light mode"
    : "Bytt til dark mode";
});
