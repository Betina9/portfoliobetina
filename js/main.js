document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("toggle-theme");
  button.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      button.textContent = "Bytt til light mode";
    } else {
      button.textContent = "Bytt til dark mode";
    }
  });
});
