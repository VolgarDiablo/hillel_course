// Написати функцію, яка приймає 1 параметр. Та скадае значення з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
// console.log(sum(4)); // 4
// console.log(sum(6)); // 10
// console.log(sum(10)); // 20
// console.log(sum(7)); // 27

function sumNumber() {
  let currentSum = 0;
  return function (number) {
    return (currentSum += number);
  };
}
let sum = sumNumber();

console.log(sum(4)); // 4
console.log(sum(6)); // 10
console.log(sum(10)); // 20
console.log(sum(7)); // 27
