const title = document.getElementById("title");
const toogleButton = document.getElementById("toogle-button");

toogleButton.addEventListener("click", function () {
  title.classList.toggle("color-changed");
});
