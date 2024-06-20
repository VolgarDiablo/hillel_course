// Дано тризначне число, яке надае користувач, потрибно визначити:
// Чи правда, що всі цифри однакові?
// Чи є серед цифр цифри однакові?
const enterNumber = prompt('Enter a three-digit number:');

if (enterNumber.length !== 3) {
    alert('Please enter a valid three-digit number.');
} else {
    if (enterNumber[0] === enterNumber[1] && enterNumber[1] === enterNumber[2]) {
        alert('It is true that all numbers are the same');
    } else if (enterNumber[0] === enterNumber[1] || enterNumber[0] === enterNumber[2] || enterNumber[1] === enterNumber[2]) {
        alert('It is true that there are numbers among the digits that are the same');
    } else {
        alert('No identical ones were found');
    }
}
