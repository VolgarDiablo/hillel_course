const bigPicture = document.querySelector("#big-picture");
const btnCloseBigPicture = document.querySelector("#picture-cancel");
const picture = document.querySelector(".pictures");

export function showBigPicture(id) {
  console.log(`Clicked on photo ${id}`);
  if (bigPicture.classList.contains("hidden")) {
    openBigPicture();
    setDataImg(id);
  }
}

function openBigPicture() {
  bigPicture.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function setDataImg(id) {
  const clickedImg = picture.querySelector(`img [data-id=${id}]`);
  console.log(clickedImg.src);
}
