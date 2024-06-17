//Додати туди невеликий скрипт, мета якого – вивести всі відомі вам типи даних у консоль. Використовуючи оператор typeof та console.log
const ageUser = 22;
const nameUser = "Anton";
const isTrue = true;
const person = {
  name: nameUser,
  age: ageUser,
};
const bigNumber = 1234567890123456789012345678901234567890n;
const uniqueID = Symbol("id");
const emptyValue = null;

console.log(typeof ageUser); //"number"
console.log(typeof nameUser); //"string"
console.log(typeof isTrue); //"boolean"
console.log(typeof person); //"object"
console.log(typeof bigNumber); // "bigint"
console.log(typeof uniqueID); //"symbol"
console.log(typeof emptyValue); //"object"
console.log(typeof variable); //"undefined"
