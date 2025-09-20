const box = document.getElementById("box");
const joke = document.getElementById("joke");
const text = document.getElementById("text");

joke.addEventListener("click", function () {
  console.log("clicked");
  joke.textContent = "Loading...";
});
