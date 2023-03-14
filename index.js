function startAnimation() {
  const color1Duration =
    document.getElementById("color1-duration").value * 1000; // convert to milliseconds
  const color2Duration =
    document.getElementById("color2-duration").value * 1000; // convert to milliseconds
  const repetitions = document.getElementById("repetitions").value;
  const pauseDuration = document.getElementById("pause-duration").value * 1000; // convert to milliseconds
  const background = document.getElementById("background");
  const content = document.getElementById("content");
  const counter = document.getElementById("counter");

  // add the hide class to the content element
  content.classList.add("hide");
  counter.style.display = "block";
  for (let i = 0; i < repetitions; i++) {
    
    // Counter
    setTimeout(() => {
      counter.textContent = repetitions - i;
    }, i * (color1Duration + color2Duration + pauseDuration));

    // Duration 1 Timer
    setTimeout(() => {
      console.log("Start timer 1");
      startTimer(color1Duration);
      background.style.backgroundColor = "#69A297";
      background.style.transform = "scaleY(1)";
      background.style.transition = `transform ${
        color1Duration / 1000
      }s ease-in`;
    }, i * (color1Duration + color2Duration + pauseDuration));

    // Pause Timer
    setTimeout(() => {
      console.log("Start pause timer");
      startTimer(pauseDuration);
      background.style.backgroundColor = "#F4D35E";
    }, i * (color1Duration + color2Duration + pauseDuration) + color1Duration);

    // Duration 2 Timer
    setTimeout(() => {
      console.log("Start timer 2");
      startTimer(color2Duration);
      background.style.backgroundColor = "#F87575";
        background.style.transform = "scaleY(0)";
        background.style.transition = `transform ${
          color2Duration / 1000
        }s ease-in-out`;
    }, i * (color1Duration + color2Duration + pauseDuration) + color1Duration + pauseDuration);
  }

  setTimeout(() => {
    content.classList.remove("hide");
    timer.style.display = "none";
    counter.style.display = "none";
  }, repetitions * (color1Duration + color2Duration + pauseDuration));
}

function startTimer(duration) {
  const timer = document.getElementById("timer");
  timer.style.display = "block";

  let startTime = Date.now();
  let elapsedTime = 0;

  let timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    let remainingTime = duration - elapsedTime;
    timer.textContent = (remainingTime / 1000).toFixed(1) < 0 ? "0.0" : (remainingTime / 1000).toFixed(1);

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
    }
  }, 5);
}
