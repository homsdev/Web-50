const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const progressBar = document.querySelector(".progress-bar");

let currentActive = 1;

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) currentActive = 1;
  update();
});

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) currentActive = circles.length;
  update();
});

function update() {
  updateButtons();
  updateCircles();
  updateProgress();
}

function updateCircles() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) circle.classList.add("active");
    else circle.classList.remove("active");
  });
}

function updateProgress() {
  const activeCircles = document.querySelectorAll(".active");
  const length = ((activeCircles.length - 1) / (circles.length - 1)) * 100;
  progressBar.style.width = `${length}%`;
}

function updateButtons() {
  if (currentActive === 1) prev.disabled = true;
  else if (currentActive === circles.length) next.disabled = true;
  else {
    prev.disabled = false;
    next.disabled = false;
  }
}
