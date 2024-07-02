// Створити функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2). Функція повинна повертати результат (у середині функції не має бути консоль лога!)
function curryProductNumber(x) {
  return function (y) {
    return x * y;
  };
}

console.log(curryProductNumber(5)(2)); // 10
