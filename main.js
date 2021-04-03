//whites

const timeWhite = document.querySelector('.time-w');
const plwBtn = document.querySelector('.plw-btn')
let timeSetWhite = 180;

//blacks

const timeBlack = document.querySelector('.time-b');
const plbBtn = document.querySelector('.plb-btn')
let timeSetBlack = 180;

//select timer

const gameSelector = document.querySelector('#gm-selector')

//set timer

gameSelector.addEventListener('change', (event) => {
    let gameType = event.target.value;
    setGameType(gameType)
})

const setGameType = (type) => {
    switch (type) {
        case 'bullet':
            timeSetWhite = 180
            timeSetBlack = 180
            break;
        case 'blitz':
            timeSetWhite = 480
            timeSetBlack = 480
            break;
        case 'rapid':
            timeSetWhite = 1500
            timeSetBlack = 1500
            break;
    }
}


const displayTime = (timeLeft, timeDis) => {
    // const hours = Math.floor(time/60)
    const min = Math.floor(timeLeft / 60)
    const sec = Math.floor(timeLeft % 60)
    timeDis.innerHTML = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`
}


// Timer whites

const timerWhite = () => {
    timeSetWhite--;
    displayTime(timeSetWhite, timeWhite)
}

// Timer blacks

const timerBlack = () => {
    timeSetBlack--;
    displayTime(timeSetBlack, timeBlack)
}

// buttons 

let count = false;
let intervalW = null;

let intervalB = null;

//

plwBtn.addEventListener('click', () => {
    if (count === false) {
        intervalW = setInterval(timerWhite, 1000)
        count = true;
    } else {
        count = false;
        clearInterval(intervalW)
    }
})


plbBtn.addEventListener('click', () => {
    if (count === false) {
        intervalB = setInterval(timerBlack, 1000)
        count = true;
    } else {
        count = false;
        clearInterval(intervalB)
    }
})


