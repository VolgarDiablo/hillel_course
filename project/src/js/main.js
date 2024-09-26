import { v4 as uuidv4 } from "uuid";
import { getRandomNumber, getRandomArrayItem } from "./utility.js";

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

    console.log(createPhotoObject());
  } catch (error) {
    console.error("Ошибка при загрузке JSON:", error);
  }
}

function createComment() {
  return {
    id: uuidv4(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: getRandomArrayItem(messagePhotos),
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
