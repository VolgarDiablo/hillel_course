// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])'
// поверне нам "heo wor".Вихідний рядок та символи для видалення задає користувач.

function removeCharacters(inputString, charactersToRemove) {
    let result = '';

    for (let i = 0; i < inputString.length; i++) {
        let shouldRemove = false;
        for (let j = 0; j < charactersToRemove.length; j++) {
            if (inputString[i] === charactersToRemove[j]) {
                shouldRemove = true;
                break;
            }
        }
        if (!shouldRemove) {
            result += inputString[i];
        }
    }

    return result;
}

const inputString = prompt('Введіть рядок:', 'Hello');
const charactersToRemove = prompt('Введіть символи для видалення (розділені комами):').split(',');

const result = removeCharacters(inputString, charactersToRemove);

alert('Результат: ' + result);
