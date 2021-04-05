//whites

const timeWhite = document.querySelector('.time-w');
const plwBtn = document.querySelector('.plw-btn')
let timeSetWhite = 180;

let intervalW = null;

//blacks

const timeBlack = document.querySelector('.time-b');
const plbBtn = document.querySelector('.plb-btn')
let timeSetBlack = 180;

let intervalB = null;

//shared
const resetBtn = document.querySelector('.reset-btn')
const gameSelector = document.querySelector('#gm-selector')
let count = false;
let gameType = 'bullet';
let isGameOver = false;

//choose gametype

gameSelector.addEventListener('change', (event) => {
    gameType = event.target.value;
    setGameType(gameType)
})
const setGameType = (type) => {
    switch (type) {
        case 'bullet':
            timeSetWhite = 180
            timeSetBlack = 180
            timeWhite.innerHTML = '03:00';
            timeBlack.innerHTML = '03:00';
            break;
        case 'blitz':
            timeSetWhite = 480
            timeSetBlack = 480
            timeWhite.innerHTML = '08:00';
            timeBlack.innerHTML = '08:00';
            break;
        case 'rapid':
            timeSetWhite = 1500
            timeSetBlack = 1500
            timeWhite.innerHTML = '25:00';
            timeBlack.innerHTML = '25:00';
            break;
        case 'armageddon':
            timeSetWhite = 1800
            timeSetBlack = 2100
            timeWhite.innerHTML = '30:00';
            timeBlack.innerHTML = '35:00';
            break;
    }
}


//display time
const displayTime = (timeLeft, timeDis) => {
    //const hours = Math.floor(timeLeft/60)
    const min = Math.floor(timeLeft / 60)
    const sec = Math.floor(timeLeft % 60)
    timeDis.innerHTML = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`
}


// Timer, which is not working now

// const timer = (tmCount, tmDisplayed) => {
//     tmCount--;
//     displayTime(tmCount, tmDisplayed);
//     console.log(tmCount)
// }

//Timer Whites

const timerWhite = () => {
    timeSetWhite--;
    displayTime(timeSetWhite, timeWhite);
}

// Timer Black

const timerBlack = () => {
    timeSetBlack--;
    displayTime(timeSetBlack, timeBlack);
}

// buttons startStop

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


// reset button

resetBtn.addEventListener('click', () => {
    setGameType(gameType)
})
