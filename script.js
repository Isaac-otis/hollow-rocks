// We'll create two constants
const sectionTag = document.querySelector("section");
const button = document.querySelector("button");


// we'll add an event listener to the button to check for clicks
button.addEventListener("click", function() {
  
  // we'll toggle a class name and then use that particular class to add our styles
  sectionTag.classList.toggle("new-class");
});