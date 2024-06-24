// Вивести в консоль числа від 20 до 30 через пропуск використовуючи  крок 0,5 (20 20,5 21 21,5 ....)
const startedNumber = 20;
const finishedNUmber = 30;
let outPut = "";

for (let number = startedNumber; number <= finishedNUmber; number += 0.5) {
    outPut += number + " ";
}

console.log(outPut.trim().replaceAll('.',','));