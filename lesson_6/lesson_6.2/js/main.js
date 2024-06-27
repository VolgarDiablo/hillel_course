// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
const mixedArray = ['sads', '', '123dsad', 2, '4', 3];

function calculateNumericAverage(array) {
    let sum = 0;
    let numericCount = 0;
    for (let i = 0; i < array.length; i++) {
        let value = parseFloat(array[i]);
        if (!isNaN(value) && typeof array[i] !== 'string') {
            sum += value;
            numericCount++;
        }
    }
    console.log(numericCount);
    return numericCount === 0 ? 0 : sum / numericCount;
}

let result = calculateNumericAverage(mixedArray);
console.log(result);
