const parentContainer = document.getElementById("parent-container");

parentContainer.addEventListener("click", () => {
  if (e.target.tagName === "BUTTON") {
    console.log(`You clicked: ${e.target.textContent}`);
  }
});
