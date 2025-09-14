/*
* - Напишемо клас Timer, який буде
* - запускати та зупиняти відлік часу
*/


const startBtn = document.querySelector("button[data-action-start]");
const stopBtn = document.querySelector("button[data-action-stop]");
const clockface = document.querySelector(".clockface");

// class Timer {

//     constructor({ onTick }) {
//         this.onTick = onTick;
//         this.isActive = false;
//         this.intervalId = null;

//         this.init();
//     }

//     init() {
//         const time = this.getTimeComponents(0);
//         this.onTick(time)
//     }
    

//     start() {
//         if(this.isActive) {
//             return;
//         }

//         this.isActive = true;
//         const startTime = Date.now();

//         this.intervalId = setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startTime;

//             const time = this.getTimeComponents(deltaTime);

//             this.onTick(time);
            
//         }, 1000)

//     }


//     stop() {
//         clearInterval(this.intervalId);
//         this.init();
//         this.isActive = false;
//     }

//     getTimeComponents(time) {
//         const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//         const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//         const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//         return { secs, mins, hours };
//     }

//     pad(value) {
//         return String(value).padStart(2, "0");
//     }



// }


// const timer = new Timer({
//     onTick: updateClockface
// });

// startBtn.addEventListener("click", timer.start.bind(timer));
// stopBtn.addEventListener("click", timer.stop.bind(timer));


// function updateClockface({ secs, mins, hours }) {
//     clockface.textContent = `${hours}:${mins}:${secs}`
// }



//=================== without using class ===


let isActive = false;
let intervalId = null;

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);

init();



function start() {
        if(isActive) {
            return;
        }

        isActive = true;
        const startTime = Date.now();

        intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;

            const time = getTimeComponents(deltaTime);

            onTick(time);
            
        }, 1000)

    }

function getTimeComponents(time) {
        const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

        return { secs, mins, hours };
    }

function pad(value) {
        return String(value).padStart(2, "0");
    }


function onTick({ secs, mins, hours }) {
    clockface.textContent = `${hours}:${mins}:${secs}`
}

function init() {
        const time = getTimeComponents(0);
        onTick(time)
    }


function stop() {
        clearInterval(intervalId);
        init();
        isActive = false;
    }


