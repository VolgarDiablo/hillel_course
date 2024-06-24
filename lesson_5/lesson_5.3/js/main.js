// Дано ціле число N (ввести через prompt). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N
const inputNumber = prompt('Enter digit:', 0);

for (let number = 1; number <= 100; number++) {
  if (Math.pow(number, 2) < inputNumber) {
    console.log(number);
  }
}
