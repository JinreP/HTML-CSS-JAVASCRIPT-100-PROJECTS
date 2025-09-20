const myLabel = document.getElementById("myLabel");
const myButton = document.getElementById("myButton");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;

function increase() {
  count++;
  myLabel.textContent = count;
  updadeColor();
}

function decrease() {
  count--;
  myLabel.textContent = count;
  updadeColor();
}

function reset() {
  count = 0;
  myLabel.textContent = count;
  updadeColor();
}
function updadeColor() {
  myLabel.textContent = count;

  if (count > 0) {
    myLabel.style.color = "green";
  } else if (count < 0) {
    myLabel.style.color = "red";
  } else {
    myLabel.style.color = "black";
  }
}

increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") {
    increase();
  } else if (event.key === "ArrowDown") {
    decrease();
  } else if (event.key === "r") {
    reset();
  }
});
