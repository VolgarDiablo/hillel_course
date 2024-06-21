//Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл. Приклад:
//10369
//1 0 3 6 9

//Option 1
// const test = 10369;

// let string = test.toString();
// let newString = "";

// console.log(string.length);
// for (let i = 0; i < string.length; i++) {
//   newString = newString + " " + string[i];
// }
// console.log(newString);

// Option 2
// const example = "10-03-69";
// const stringNumber = test.toString();
// const digitsArray = stringNumber.split("-").join(" ");
// console.log(digitsArray);

//Option 3
// const test = 10369;
// let temp = test;
// let result = "";
// while (temp > 0) {
//   const digit = temp % 10;
//   result = digit + " " + result;
//   temp = Math.floor(temp / 10);
// }
// console.log(result);

//Option 4
const test = 10369;
let temp = test;
let result = "";
let array = [10000, 1000, 100, 10, 1];
for (let i = 0; i < array.length; i++) {
  digit = Math.floor(temp / array[i]);
  result = result + " " + digit;
  temp = temp - array[i] * digit;
}
console.log(result);
