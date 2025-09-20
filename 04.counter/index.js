const myLabel = document.getElementById("myLabel");
const myButton = document.getElementById("myButton");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;

function increase() {
  count = count + 1;
  myLabel.textContent = count;
}

function decrease() {
  count = count - 1;
  myLabel.textContent = count;
}

function reset() {
  count = 0;
  myLabel.textContent = count;
}

increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);
