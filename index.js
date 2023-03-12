function startAnimation() {
  const color1Duration =
    document.getElementById("color1-duration").value * 1000; // convert to milliseconds
  const color2Duration =
    document.getElementById("color2-duration").value * 1000; // convert to milliseconds
  const repetitions = document.getElementById("repetitions").value;
  const background = document.getElementById("background");

  content.classList.add("hide");

  for (let i = 0; i < repetitions; i++) {
    setTimeout(() => {
      background.style.backgroundColor = "#69A297";
      background.style.transform = "scaleY(1)";
      background.style.transition = `transform ${
        color1Duration / 1000
      }s linear`;
      setTimeout(() => {
        background.style.backgroundColor = "#210203";
        background.style.transform = "scaleY(0)";
        background.style.transition = `transform ${
          color2Duration / 1000
        }s linear`;
      }, color1Duration);
    }, i * (color1Duration + color2Duration));
  }

  // remove the hide class from the content element after the animation finishes
  setTimeout(() => {
    content.classList.remove("hide");
  }, repetitions * (color1Duration + color2Duration));
}
