const button = document.getElementById("toggle-btn");

button.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  button.textContent = document.body.classList.contains("dark-mode")
    ? "🔆"
    : "🌙";
});
let mybutton = document.getElementById("scrollToTopBtn");
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
