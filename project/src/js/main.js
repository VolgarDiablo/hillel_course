import { v4 as uuidv4 } from "uuid";

import {
  getRandomNumber,
  getRandomArrayItem,
  getRandomArrayComments,
} from "./util.js";
import { renderPicture, renderOnePicture } from "./render-picture.js";
import { renderBigPicture } from "./render-big-picture.js";
import { uploadFile } from "./upload-file.js";

const sectionPictures = document.querySelector(".pictures");
const imgFiltersForm = document.querySelector(".img-filters__form");

let generatedPhotos = [];
let messagePhotos = [];
let descriptions = [];
let authorNames = [];

async function loadData() {
  try {
    const data = await fetch("./js/constants.json").then((response) =>
      response.json()
    );

    messagePhotos = data.commentsMessages;
    descriptions = data.photoDescriptions;
    authorNames = data.authorNames;

    generatedPhotos = createPhotoObject();

    renderPicture(generatedPhotos);
  } catch (error) {
    console.error("Ошибка при загрузке JSON:", error);
  }
}

function createComment() {
  return {
    id: uuidv4(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: getRandomArrayComments(messagePhotos),
    name: getRandomArrayItem(authorNames),
  };
}

function createPhotoObject() {
  return Array(25)
    .fill()
    .map((_, index) => ({
      id: index + 1,
      url: `photos/${index + 1}.jpg`,
      description: getRandomArrayItem(descriptions),
      likes: getRandomNumber(15, 200),
      comments: [createComment()],
    }));
}

loadData();

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  };
}

function getRandomPhotos(count) {
  return [...generatedPhotos].sort(() => Math.random() - 0.5).slice(0, count);
}

function filterByComments() {
  return [...generatedPhotos].sort(
    (a, b) => b.comments[0].message.length - a.comments[0].message.length
  );
}

function applyFilter(filterType) {
  const pictures = sectionPictures.querySelectorAll(".picture");
  let filteredPhotos = [];

  pictures.forEach((picture) => {
    picture.remove();
  });

  switch (filterType) {
    case "filter-random":
      filteredPhotos = getRandomPhotos(10);
      break;
    case "filter-discussed":
      filteredPhotos = filterByComments();
      break;
    default:
      filteredPhotos = generatedPhotos;
      break;
  }

  renderPicture(filteredPhotos);
}

imgFiltersForm.addEventListener(
  "click",
  debounce((e) => {
    const target = e.target;
    const previousActiveButton = document.querySelector(
      ".img-filters__button--active"
    );

    if (target.classList.contains("img-filters__button--active")) return;

    if (previousActiveButton) {
      previousActiveButton.classList.remove("img-filters__button--active");
    }

    target.classList.add("img-filters__button--active");

    applyFilter(target.id);
  }, 500)
);

sectionPictures.addEventListener("click", (e) => {
  const id = +e.target.dataset.id;
  if (isNaN(id)) {
    return;
  }
  renderBigPicture(id, generatedPhotos);
});

document.getElementById("upload-file").onchange = function () {
  const file = document.getElementById("upload-file").files[0];
  if (file) {
    const typeUploadFile = file.type;

    if (typeUploadFile.startsWith("image/")) {
      uploadFile(file);
    } else {
      alert("Please upload an image file");
    }
  }
};
