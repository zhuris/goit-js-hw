const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const refs = {
  start: document.querySelector("[data-action='start']"),
  stop: document.querySelector("[data-action='stop']"),
  body: document.querySelector("body")
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let doInterval;

const clickStart = e => {
  doInterval = setInterval(() => {
    let rand = randomIntegerFromInterval(0, colors.length);
    document.body.style.backgroundColor = colors[rand];
  }, 1000);
  refs.start.disabled = true;
};

const clickStop = e => {
  clearInterval(doInterval);
  refs.start.disabled = false;
};

refs.start.addEventListener("click", clickStart);
refs.stop.addEventListener("click", clickStop);
