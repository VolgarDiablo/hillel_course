const buttonEnterUrl = document.getElementById("prompt");
const buttonLocationLink = document.getElementById("location");
let url;

buttonEnterUrl.addEventListener("click", () => {
  url = prompt("Enter a link to go to the entered page", "https://");
  if (!isValidUrl(url)) {
    alert("Invalid URL. Please enter a URL starting with 'https://'.");
    url = undefined;
  }
});

buttonLocationLink.addEventListener("click", () => {
  if (url === undefined) {
    alert("Click first button to enter the link");
  } else window.open(url, "_blank");
});

function isValidUrl(url) {
  const pattern = /^https:\/\/.*/;
  return pattern.test(url);
}
