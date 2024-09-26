import { v4 as uuidv4 } from "uuid";

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

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

function createComment() {
  return {
    id: uuidv4(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: getRandomArrayItem(messagePhotos),
    name: getRandomArrayItem(authorNames),
  };
}

function getRandomArrayItem(array) {
  return array[getRandomNumber(0, array.length)];
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
