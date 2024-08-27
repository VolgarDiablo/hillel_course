let startTime = 100;

function formatTime(seconds) {
  // const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  // return `${hours.toString().padStart(2, "0")}:
  // ${minutes.toString().padStart(2, "0")}:
  // ${remainingSeconds.toString().padStart(2, "0")}`;
  return `${minutes.toString().padStart(2, "0")}:
  ${remainingSeconds.toString().padStart(2, "0")}`;
}

function updateTimer() {
  const timerElement = document.getElementById("timer");
  timerElement.textContent = formatTime(startTime);

  if (startTime <= 0) {
    clearInterval(timerInterval);
  } else {
    startTime--;
  }
}

const timerInterval = setInterval(updateTimer, 1000);

updateTimer();
