export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomArrayItem(array) {
  return array[getRandomNumber(0, array.length)];
}
