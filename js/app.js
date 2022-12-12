window.addEventListener("DOMContentLoaded", () => {
  const $hours = document.querySelector("#hours"),
    $minuts = document.querySelector("#minuts"),
    $seconds = document.querySelector("#seconds"),
    $milliseconds = document.querySelector("#miliseconds"),
    $startBtn = document.querySelector(".timer__start"),
    $resetBbtn = document.querySelector(".timer__reset"),
    $pauseBtn = document.querySelector(".timer__pause");

  let hours = 0,
    minuts = 0,
    seconds = 0,
    milliseconds = 0,
    interval;

  $startBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(start, 10);
  });

  $pauseBtn.addEventListener("click", () => {
    clearInterval(interval);
  });

  $resetBbtn.addEventListener("click", () => {
    hours = 0;
    minuts = 0;
    seconds = 0;
    milliseconds = 0;
    $milliseconds.innerHTML = `0${milliseconds}`;
    $seconds.innerHTML = `0${seconds}`;
    $minuts.innerHTML = `0${minuts}`;
    $hours.innerHTML = `0${hours}`;
    clearInterval(interval);
  });

  function start() {
    milliseconds++;
    //milliseconds
    if (milliseconds < 9) {
      $milliseconds.innerHTML = `0${milliseconds}`;
    }
    if (milliseconds > 9) {
      $milliseconds.innerHTML = milliseconds;
    }
    if (milliseconds > 99) {
      milliseconds = 0;
      seconds++;
    }

    //seconds
    if (seconds > 9) {
      $seconds.innerHTML = seconds;
    } else {
      $seconds.innerHTML = `0${seconds}`;
    }
    if (seconds > 59) {
      minuts++;
      seconds = 0;
    }

    //minuts
    if (minuts > 9) {
      $minuts.innerHTML = minuts;
    } else {
      $minuts.innerHTML = `0${minuts}`;
    }
    if (minuts > 59) {
      hours++;
      minuts = 0;
    }

    //hours
    if (hours > 9) {
      $hours.innerHTML = hours;
    } else {
      $hours.innerHTML = `0${hours}`;
    }
  }
});
