/* GLOBAL SCOPE */
const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");
const resetBtn = document.getElementById("resetBtn");

/* PART 2: FUNCTION WITH PARAMETERS & RETURN VALUE */
function addAnimation(element, className) {
  element.classList.add(className);
  return `${className} added`;
}

/* FUNCTION SHOWING LOCAL SCOPE */
function removeAnimation(element, className) {
  // local variable
  let status = "removed";
  element.classList.remove(className);
  return status;
}

/* PART 3: COMBINING JS + CSS */
animateBtn.addEventListener("click", function () {
  const result = addAnimation(box, "animate");
  console.log(result);
});

resetBtn.addEventListener("click", function () {
  const result = removeAnimation(box, "animate");
  console.log(result);
});
