// Таймер обратного отсчета
// Создай плагин настраиваемого таймера, который ведет обратный отсчет
//  до предварительно определенной даты.Такой плагин может использоваться в блогах и интернет - магазинах,
//     страницах регистрации событий, во время технического обслуживания и т.д.

const timerRefs = {
  daysSpan: document.querySelector('[data-value="days"]'),
  hoursSpan: document.querySelector('[data-value="hours"]'),
  minutesSpan: document.querySelector('[data-value="mins"]'),
  secondsSpan: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
  constructor(date) {
    this.selector = date.selector;
    this.targetDate = date.targetDate;
    this.deltaTime = 0;
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
  updateClockFace(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    timerRefs.daysSpan.textContent = days;
    timerRefs.hoursSpan.textContent = hours;
    timerRefs.minutesSpan.textContent = mins;
    timerRefs.secondsSpan.textContent = secs;
  }
  start() {
    setInterval(() => {
      const currentDate = Date.now();
        this.deltaTime = this.targetDate - currentDate;
       this.updateClockFace(this.deltaTime);
    }, 1000);
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date('Jan 01, 2022'),
}).start();





/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
//const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
//const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
//const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// //const secs = Math.floor((time % (1000 * 60)) / 1000);
// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jan 01, 2022'),
// });
