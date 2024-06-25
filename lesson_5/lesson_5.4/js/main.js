// Дано ціле число (ввести через 'prompt'). З'ясувати, чи просте воно (простим називається число, більше 1, що не має інших дільників, крім 1 і себе).
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  if (n == 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

const number = parseInt(prompt('Введіть ціле число: '), 10);

if (isPrime(number)) {
  console.log(`Число ${number} є простим.`);
} else {
  console.log(`Число ${number} не є простим.`);
}
