class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      day: document.querySelector(`${this.selector} [data-value="days"]`),
      hour: document.querySelector(`${this.selector} [data-value="hours"]`),
      min: document.querySelector(`${this.selector} [data-value="mins"]`),
      sec: document.querySelector(`${this.selector} [data-value="secs"]`)
    };
    this.startTimer();
  }

  startTimer() {
    setInterval(() => {
      const time = this.targetDate - new Date().getTime();
      if (time >= 0) {
        const days = empty(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = empty(
          Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        const mins = empty(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = empty(Math.floor((time % (1000 * 60)) / 1000));

        this.refs.day.textContent = days;
        this.refs.hour.textContent = hours;
        this.refs.min.textContent = mins;
        this.refs.sec.textContent = secs;
      } else {
        clearInterval(this.startTimer);
      }
    }, 1000);
  }
}

function empty(value) {
  return String(value).padStart(2, "0");
}

const newYear = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("dec 31, 2019")
});
