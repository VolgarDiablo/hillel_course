const bigPicture = document.querySelector("#big-picture");
const btnCloseBigPicture = document.querySelector("#picture-cancel");

const commentTemplate = `
<li class="social__comment">
  <img
    class="social__picture"
    src=""
    alt=""
    width="35"
    height="35"
  />
  <p class="social__text">
  </p>
</li>`;

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
  commentsCount.textContent = photoData.comments[0].message.length;

  const infoCommentsCount = document.querySelector(".social__comment-count");

  renderComments(photoData);
}

function renderComments(photoData) {
  const commentsList = bigPicture.querySelector(".social__comments");
  commentsList.innerHTML = "";

  const commentElements = createComments(photoData.comments[0]);
  console.log(commentElements[0]);
  commentsList.append(...commentElements);
}

function createComments(comment) {
  const commentElements = comment.message.map((messageText) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = commentTemplate.trim();
    const commentElement = tempDiv.firstChild;

    const imgElement = commentElement.querySelector(".social__picture");
    const commentText = commentElement.querySelector(".social__text");

    imgElement.src = comment.avatar;
    imgElement.alt = comment.name;

    commentText.textContent = messageText;

    return commentElement;
  });

  return commentElements;
}
