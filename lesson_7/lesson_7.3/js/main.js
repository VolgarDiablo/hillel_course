// Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу) . Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше.
//  Якщо користувач вводить більше ста, текст або цикл закінчує всі ітерації, то функція виводить в консоль останній введення користувача і завершує функцію.

function promptForNumber() {
  let lastInput;

  for (let i = 0; i < 10; i++) {
    let inputNumber = getInputNumber();

    if (isValidNumber(inputNumber)) {
      lastInput = inputNumber;
      break;
    } else {
      handleInvalidInput(inputNumber);
    }
    lastInput = inputNumber;
  }

  displayLastInput(lastInput);
}

function getInputNumber() {
  let inputString = prompt("Enter a number greater than 100:", 0);
  return Number(inputString);
}

function isValidNumber(number) {
  return number > 100;
}

function handleInvalidInput(number) {
  if (isNaN(number) || number <= 100) {
    alert("The number must be greater than 100. Please try again.");
  }
}

function displayLastInput(input) {
  console.log("Last input:", input);
}

promptForNumber();
