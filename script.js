const button = document.getElementById("greetBtn");
const message = document.getElementById("message");
button.addEventListener("click", function () {
message.textContent = "Hello, welcome to the site!";
});
const colorBtn = document.getElementById('colorBtn');
const heading = document.querySelector("h1");
colorBtn.addEventListener("click", function () {
  if (heading.style.color === "gold") {
    heading.style.color = "white";
  } else {
    heading.style.color = "gold";
  }
});