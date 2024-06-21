// Основне завдання, cтворити скрипт яки повинен виконувати наступне:
// запитати у користувача рік народження;
// запитати в нього, в якому місті він живе;
// запитати його улюблений вид спорту.
// При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:

// його вік;
// якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..."
// і на місце точок підставляємо країну, столицею якої є місто.Інакше показуємо йому “ти живеш у місті…”, де місце точок – введене місто.
// Додаткове завдання *
//   Вибираємо самі три види спорту та три чемпіони у цих видах.Відповідно, якщо користувач вкаже один із цих видів спорту,
//     то показуємо йому повідомлення “Круто! Хочеш стати …? і підставляємо на місце точок ім'я та прізвище чемпіона.

// Все це має бути відображено в одному вікні (алерті).

// Додаткове завдання
// Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати, показати йому повідомлення – “Шкода,
//   що Ви не захотіли ввести свій(ю) …” і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту.
const currentYear = new Date().getFullYear();
let yearBirthdayUser = prompt('What year were you born?');

if (yearBirthdayUser === null) {
  alert('It is a pity that you did not want to enter your year of birth.');
} else {
  yearBirthdayUser = yearBirthdayUser.trim();
  if (yearBirthdayUser === '' || isNaN(yearBirthdayUser) || yearBirthdayUser > currentYear) {
    alert('Please enter a valid year.');
  } else {
    alert(`Your age is ${currentYear - yearBirthdayUser} years old`);
  }
}

let cityLiveUser = prompt('What city do you live in?');

if (cityLiveUser === null) {
  alert('It is a pity that you did not want to enter your city of residence.');
} else {
  cityLiveUser = cityLiveUser.trim();
  if (!isNaN(cityLiveUser) || cityLiveUser === '') {
    alert('Please enter a valid city.');
  } else {
    let capitalCityLiveUser = cityLiveUser.toLowerCase() === 'kyiv' ? 'Ukraine' : cityLiveUser.toLowerCase() === 'washington' ? 'USA' : cityLiveUser.toLowerCase() === 'london' ? 'England' : null;

    if (capitalCityLiveUser !== null) {
      alert(`You live in the capital of ${capitalCityLiveUser}`);
    } else {
      alert(`You live in the city of ${cityLiveUser}`);
    }
  }
}

let favoriteSportUser = prompt('What`s your favorite sport?');

if (favoriteSportUser === null) {
  alert('It`s a shame you didn`t want to enter your favorite sport.');
} else {
  favoriteSportUser = favoriteSportUser.trim();
  if (!isNaN(favoriteSportUser) || favoriteSportUser === '') {
    alert('Please enter a favorite sport.');
  } else {
    let famousPersonSport =
      favoriteSportUser.toLowerCase() === 'chess' ? 'Dommaraju Gukesh' : favoriteSportUser.toLowerCase() === 'tennis' ? 'Carlos Alcaraz' : favoriteSportUser.toLowerCase() === 'archery' ? 'Mete Gazoz' : null;

    if (famousPersonSport !== null) {
      alert(`Cool! Do you want to become ${famousPersonSport}?`);
    } else {
      alert('That sport is not in our list of selected sports.');
    }
  }
}
