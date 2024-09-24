import { v4 as uuidv4 } from "uuid";
import { getRandomNumber, getRandomArrayItem } from "./utility.js";

let messagePhotos = [];
let descriptions = [];
let authorNames = [];

async function loadData() {
  try {
    const [messageData, descriptionData, authorData] = await Promise.all([
      fetch("./js/photo-message.json").then((response) => response.json()),
      fetch("./js/photo-description.json").then((response) => response.json()),
      fetch("./js/photo-name-author.json").then((response) => response.json()),
    ]);

    messagePhotos = messageData.commentsMessages;
    descriptions = descriptionData.photoDescriptions;
    authorNames = authorData.authorNames;

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
  const photos = [];

  for (let i = 1; i <= 25; i++) {
    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: descriptions[getRandomNumber(0, descriptions.length)],
      likes: getRandomNumber(15, 200),
      comments: [createComment()],
    });
  }

  return photos;
}

loadData();
