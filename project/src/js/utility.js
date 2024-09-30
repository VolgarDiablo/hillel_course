export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomArrayItem(array) {
  return array[getRandomNumber(0, array.length)];
}

export function getRandomArrayComments(array) {
  const endIndex = getRandomNumber(0, array.length + 1);
  return array.slice(0, endIndex);
}
