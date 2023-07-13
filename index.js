function startAnimation() {
  const color1Duration =
    document.getElementById('color1-duration').value * 1000; // convert to milliseconds
  const color2Duration =
    document.getElementById('color2-duration').value * 1000; // convert to milliseconds
  const repetitions = document.getElementById('repetitions').value;
  const pauseDurationAfter =
    document.getElementById('pause-duration-after').value * 1000; // convert to milliseconds
  const pauseDurationIntra =
    document.getElementById('pause-duration-intra').value * 1000; // convert to milliseconds
  const startDelay =
    document.getElementById('start-delay').value * 1000; // convert to milliseconds
  const background = document.getElementById('background');
  const content = document.getElementById('content');
  const counter = document.getElementById('counter');

  const switchElem = document.getElementById('toggle-switch');

  background.style.transformOrigin = switchElem.checked
    ? 'top'
    : 'bottom';

  // add the hide class to the content element
  content.classList.add('hide');
  counter.style.display = 'block';

  // Start the animation
  for (let i = 0; i < repetitions; i++) {
    // Counter
    setTimeout(
      () => {
        console.log('Start start delay counter');
        startTimer(startDelay);
        counter.textContent = repetitions - i;
      },
      i === 0
        ? i *
            (color1Duration +
              color2Duration +
              pauseDurationIntra +
              pauseDurationAfter)
        : 0
    );

    // Duration 1 Timer
    setTimeout(() => {
      console.log('Start timer 1');
      startTimer(color1Duration);
      background.style.backgroundColor = '#69A297';
      background.style.transform = 'scaleY(1)';
      background.style.transition = `transform ${
        color1Duration / 1000
      }s ease-in`;
    }, startDelay + i * (color1Duration + color2Duration + pauseDurationIntra + pauseDurationAfter));

    // Pause Timer Intra
    setTimeout(() => {
      console.log('Start pause 1 timer');
      startTimer(pauseDurationIntra);
      background.style.backgroundColor = '#F4D35E';
    }, startDelay + i * (color1Duration + color2Duration + pauseDurationIntra + pauseDurationAfter) + color1Duration);

    // Duration 2 Timer
    setTimeout(() => {
      console.log('Start timer 2');
      startTimer(color2Duration);
      background.style.backgroundColor = '#F87575';
      background.style.transform = 'scaleY(0)';
      background.style.transition = `transform ${
        color2Duration / 1000
      }s ease-in-out`;
    }, startDelay + i * (color1Duration + color2Duration + pauseDurationIntra + pauseDurationAfter) + color1Duration + pauseDurationIntra);

    // Pause Timer After
    setTimeout(() => {
      console.log('Start pause 2 timer');
      startTimer(pauseDurationAfter);
      background.style.backgroundColor = '#F4D35E';
    }, startDelay + i * (color1Duration + color2Duration + pauseDurationIntra + pauseDurationAfter) + color1Duration + pauseDurationIntra + color2Duration);
  }

  setTimeout(() => {
    content.classList.remove('hide');
    timer.style.display = 'none';
    counter.style.display = 'none';
  }, startDelay + repetitions * (color1Duration + color2Duration + pauseDurationIntra + pauseDurationAfter));
}

function startTimer(duration) {
  const timer = document.getElementById('timer');
  timer.style.display = 'block';

  let startTime = Date.now();
  let elapsedTime = 0;

  let timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    let remainingTime = duration - elapsedTime;
    timer.textContent =
      (remainingTime / 1000).toFixed(1) < 0
        ? '0.0'
        : (remainingTime / 1000).toFixed(1);

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
    }
  }, 5);
}
