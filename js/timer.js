window.addEventListener("DOMContentLoaded", () => {
  const $startBtn = document.querySelector(".timer__start"),
    $pauseBtn = document.querySelector(".timer__pause"),
    $resetBtn = document.querySelector(".timer__reset"),
    $hours = document.querySelector("#hours"),
    $minuts = document.querySelector("#minuts"),
    $seconds = document.querySelector("#seconds"),
    $doneModal = document.querySelector(".done-modal");

  let hourInput = document.querySelector("#hours-input"),
    minutsIinput = document.querySelector("#minuts-input"),
    secondsInput = document.querySelector("#seconds-input"),
    isTimerReset = false;

  let allTimeOnSeconds =
      +hourInput.value * 60 * 60 +
      +minutsIinput.value * 60 +
      +secondsInput.value,
    inputs = document.querySelectorAll(".inputs"),
    timoutId;

  inputs.forEach((element) => {
    element.addEventListener("input", updateInputValue);
  });

  $startBtn.addEventListener("click", () => {
    clearInterval(timoutId);
    timoutId = setInterval(() => {
      startClock();
    }, 1000);
  });
  $pauseBtn.addEventListener("click", pauseTimer);
  $resetBtn.addEventListener("click", resetTimer);

  function startClock() {
    if (allTimeOnSeconds <= 0) {
      endTime();
      return;
    }

    inputs.forEach((input) => {
      input.setAttribute("disabled", true);
    });

    allTimeOnSeconds--;
    let hours = Math.floor(allTimeOnSeconds / (60 * 60)),
      minuts = Math.floor((allTimeOnSeconds / 60) % 60),
      seconds = Math.floor(((allTimeOnSeconds / 60) * 60) % 60);

    //update nums
    $hours.innerHTML = getZero(hours);
    $minuts.innerHTML = getZero(minuts);
    $seconds.innerHTML = getZero(seconds);
  }

  function endTime() {
    clearInterval(timoutId);
    updateInputValue();
    inputs.forEach((input) => {
      input.removeAttribute("disabled");
    });
    if (!isTimerReset) {
      showModal($doneModal);
      setTimeout(() => {
        hideModal($doneModal);
      }, 1500);
    }
  }

  function pauseTimer() {
    clearInterval(timoutId);
  }

  function updateInputValue() {
    (hourInput = document.querySelector("#hours-input").value),
      (minutsIinput = document.querySelector("#minuts-input").value),
      (secondsInput = document.querySelector("#seconds-input").value);
    allTimeOnSeconds =
      +hourInput * 60 * 60 + +minutsIinput * 60 + +secondsInput;
  }

  function getZero(num) {
    if (num < 10) {
      return `0` + num;
    } else {
      return num;
    }
  }

  function resetTimer() {
    isTimerReset = true; 
    if (isTimerReset) {
      showModal($doneModal);
      setTimeout(() => {
        hideModal($doneModal);
      }, 1500);
    }

    inputs.forEach((input) => {
      input.removeAttribute("disabled");
    });

    clearInterval(timoutId);
    hourInput.value = 0;
    minutsIinput.value = 0;
    secondsInput.value = 0;
    $hours.innerHTML = "00";
    $minuts.innerHTML = "00";
    $seconds.innerHTML = "00";
    updateInputValue();
  }

  function showModal(modal) {
    modal.classList.remove("hide");
    modal.classList.add("show");
  }

  function hideModal(modal) {
    modal.classList.remove("show");
    modal.classList.add("hide");
  }
});
