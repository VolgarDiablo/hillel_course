const containerImg = document.getElementById("container-img");
const randomIndex = Math.floor(Math.random() * 9) + 1;

containerImg.innerHTML = `<img src="img/${randomIndex}.webp" alt="image">`;
