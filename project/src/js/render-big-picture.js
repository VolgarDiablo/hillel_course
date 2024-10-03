const bigPicture = document.querySelector("#big-picture");
const btnCloseBigPicture = document.querySelector("#picture-cancel");
const btnLoadMoreComments = document.querySelector(".social__comments-loader");
const commentsList = bigPicture.querySelector(".social__comments");
const currentCountComments = document.querySelector("#currentCountComments");

let currentCommentData = null;
let currentCommentIndex = 0;

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

btnLoadMoreComments.addEventListener("click", () => {
  renderComments(currentCommentData);
});

function showBigPicture() {
  bigPicture.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeBigPicture() {
  bigPicture.classList.add("hidden");
  document.body.classList.remove("modal-open");

  currentCommentIndex = 0;
  currentCommentData = null;
  btnLoadMoreComments.classList.remove("hidden");
  commentsList.innerHTML = "";
  currentCountComments.textContent = 0;
}

function setDataImg(photoData) {
  const bigPictureImg = bigPicture.querySelector(".big-picture__img img");
  const likesCount = bigPicture.querySelector(".likes-count");
  const commentsCount = bigPicture.querySelector(".comments-count");

  bigPictureImg.src = photoData.url;
  likesCount.textContent = photoData.likes;
  commentsCount.textContent = photoData.comments[0].message.length;

  currentCommentData = photoData.comments;

  renderComments(currentCommentData);
}

function renderComments(commentData) {
  const limitRenderCountComments = 5;

  const renderCountComments = Math.min(
    currentCommentIndex + limitRenderCountComments,
    commentData[0].message.length
  );

  const commentElements = commentData[0].message
    .slice(currentCommentIndex, renderCountComments)
    .map((messageText) => {
      return createCommentElement(
        commentData[0].avatar,
        commentData[0].name,
        messageText
      );
    });

  currentCommentIndex = renderCountComments;
  currentCountComments.textContent = currentCommentIndex;

  if (currentCommentIndex >= commentData[0].message.length) {
    btnLoadMoreComments.classList.add("hidden");
  }

  commentsList.append(...commentElements);
}

function createCommentElement(avatar, name, messageText) {
  const li = document.createElement("li");
  li.classList.add("social__comment");

  const img = document.createElement("img");
  img.classList.add("social__picture");
  img.src = avatar;
  img.alt = name;
  img.width = 35;
  img.height = 35;

  const p = document.createElement("p");
  p.classList.add("social__text");
  p.textContent = messageText;

  li.append(img, p);
  return li;
}
