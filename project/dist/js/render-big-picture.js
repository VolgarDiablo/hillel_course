const bigPicture = document.querySelector("#big-picture");
const btnCloseBigPicture = document.querySelector("#picture-cancel");
const btnLoadMoreComments = document.querySelector(".social__comments-loader");

export function renderBigPicture(id, photos) {
  const focusedElement = document.querySelector(".picture:focus");
  removeFocus(focusedElement);

  const photoData = photos.find((photo) => photo.id === id);
  if (isBigPictureHidden()) {
    showBigPicture();
    setDataImg(photoData);
  }
}

function removeFocus(element) {
  if (element) {
    element.blur();
  }
}

function isBigPictureHidden() {
  return bigPicture.classList.contains("hidden");
}

btnCloseBigPicture.addEventListener("click", () => {
  closeBigPicture();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeBigPicture();
  }
});

function showBigPicture() {
  bigPicture.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeBigPicture() {
  bigPicture.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function setDataImg(photoData) {
  const bigPictureImg = bigPicture.querySelector(".big-picture__img img");
  const likesCount = bigPicture.querySelector(".likes-count");
  const commentsCount = bigPicture.querySelector(".comments-count");

  bigPictureImg.src = photoData.url;
  likesCount.textContent = photoData.likes;
  commentsCount.textContent = photoData.comments.length;

  renderComments(photoData.comments);
}

function renderComments(comments) {
  const commentsList = bigPicture.querySelector(".social__comments");
  commentsList.innerHTML = "";

  const commentElements = comments.map(createCommentElement);
  commentsList.append(...commentElements);
}

function createCommentElement(comment) {
  const li = document.createElement("li");
  li.classList.add("social__comment");

  const img = document.createElement("img");
  img.classList.add("social__picture");
  img.src = comment.avatar;
  img.alt = comment.name;
  img.width = 35;
  img.height = 35;

  const p = document.createElement("p");
  p.classList.add("social__text");
  p.textContent = comment.message;

  li.append(img, p);
  return li;
}
