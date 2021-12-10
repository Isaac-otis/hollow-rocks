// We'll create two constants
const sectionTag = document.querySelector("section");
const button = document.querySelector("button");

button.addEventListener("click", function() {
  sectionTag.classList.toggle("new-class");
});
