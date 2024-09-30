import { v4 as uuidv4 } from "uuid";
import {
  getRandomNumber,
  getRandomArrayItem,
  getRandomArrayComments,
} from "./utility.js";
import { renderPicture, renderOnePicture } from "./render-picture.js";
import { showBigPicture } from "./big-picture.js";

const picture = document.querySelector(".pictures");

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

picture.addEventListener("click", (e) => {
  const id = +e.target.dataset.id;
  showBigPicture(id);
});
