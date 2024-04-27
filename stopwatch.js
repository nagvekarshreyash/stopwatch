let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startTimer() {
  timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.querySelector('.display').innerText = '00:00:00';
}

function updateTimer() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  const display = document.querySelector('.display');
  display.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.querySelector('.startStop').addEventListener('click', function() {
  const buttonText = this.innerText;
  if (buttonText === 'Start') {
    startTimer();
    this.innerText = 'Stop';
  } else {
    stopTimer();
    this.innerText = 'Start';
  }
});

document.querySelector('.reset').addEventListener('click', function() {
  resetTimer();
});
