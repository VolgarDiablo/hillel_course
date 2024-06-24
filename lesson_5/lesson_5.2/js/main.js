// Один долар коштує 26 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
const exchangeRate = 26;

for (let number = 10; number <= 100; number += 10) {
  console.log(`${number} USD = ${number * exchangeRate} UAH`);
}
