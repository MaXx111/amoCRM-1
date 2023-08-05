const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
const wrapper = document.querySelector('.wrapper')

const message = document.createElement('p')
message.className = 'message'
message.textContent = 'Нужно ввести число'

let allow = false
let interval;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = (time) => {
    if(interval) {
        clearInterval(interval)
    }
    let seconds = time

    function timer() {

    if(seconds <= 0) clearInterval(interval)
      timerEl.textContent = formatTime(seconds)

      seconds = seconds - 1
    }

    interval = setInterval(timer, 1000)
};

function formatTime(seconds) {
    let hours = Math.floor(seconds / 60 / 60)
    let minutes = Math.floor(seconds / 60) - (hours * 60)
    let second = seconds % 60
    
    return [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        second.toString().padStart(2, '0')
    ].join(':');
}


inputEl.addEventListener('input', () => {
    const regex = new RegExp(/^\d+$/);

    if(!regex.test(inputEl.value) && inputEl.value.length > 0) {
       wrapper.insertAdjacentElement('beforeend', message);
       allow = false;

       return
    }

    let adjacentElement = document.querySelector('.message')

    if(adjacentElement) adjacentElement.remove()
    if(inputEl.value.length <= 0 || Number(inputEl.value) <= 0) return

    allow = true
});

buttonEl.addEventListener('click', () => {
    if(!allow) return

    createTimerAnimator(Number(inputEl.value));

    inputEl.value = '';
});

