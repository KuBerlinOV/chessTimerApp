//whites

const timeWhite = document.querySelector('.time-w');
const plwBtn = document.querySelector('.plw-btn')
let timeSetWhite = 0;

//blacks

const timeBlack = document.querySelector('.time-b');
const plbBtn = document.querySelector('plb-btn')
let timeSetBlack = 0;

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

// const countDown = setInterval(() => {
//     timeSetWhite--;
//     displayTime(timeSetWhite)
//     if (timeSetWhite <= 0) clearInterval(countDown)
// }, 1000)

const displayTime = (time) => {
    // const hours = Math.floor(time/60)
    const min = Math.floor(time / 60)
    const sec = Math.floor(time % 60)
    timeWhite.innerHTML = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`
}


// Timer

const timerFunc = () => {
    timeSetWhite--;
    displayTime(timeSetWhite)
}


// buttons 

let count = false;

plwBtn.addEventListener('click', () => {
    let countDown = setInterval(() => {
        if (timeSetWhite <= 0 || count === false) {
            clearInterval(countDown)
        }
        timeSetWhite--;
        displayTime(timeSetWhite)
    }, 1000);
    if (count === false) {
        count = true;
    } else {
        count = false;
    }
})



// find the solution for pause interval. 
//You can save it to variable and display this variable while stopped, 
//then started again, start with the number in variable   