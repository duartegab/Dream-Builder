let focusButton = document.getElementById("focus");
let buttons = document.querySelectorAll(".btn");
let shortBreakButton = document.getElementById("shortbreak");
let longBreakButton = document.getElementById("longbreak");
let startBtn = document.getElementById("btn-start");
let reset = document.getElementById("btn-reset");
let pause = document.getElementById("btn-pause");
let time = document.getElementById("time");

let set;
let active = "short";
let paused = true;
let minCount = 0;
let count = 0;
let hoursCount = 5;

time.textContent = `${hoursCount + minCount + 0}:00`;

const appendZero = (value) => { 
    return value < 10 ? `0${value}` : value;
};

const pauseTimer = () => {
    paused = true;
    clearInterval(set);
};

const resetTime = () => {
    switch(active) {
        case "long":
            hoursCount = 0;
            minCount = 300;
            count = 0;

            break;
        case "short":
            hoursCount = 0;
            minCount = 5;
            count = 0;

            break;
        default:
            hoursCount = 0;
            minCount = 25;
            count = 0;

            break;
    }
    time.textContent = `${appendZero(hoursCount + minCount + 0)}:00`;
};

reset.addEventListener("click", () => {
    pauseTimer();
    resetTime();
    startBtn.classList.add("show");
    startBtn.classList.remove("hide");
    pause.classList.add("hide");
    pause.classList.remove("show");
    reset.classList.add("hide");
    reset.classList.remove("show");
});

const removeFocus = () => {
    buttons.forEach((btn) => {
        btn.classList.remove("btn-focus");
    });
};

focusButton.addEventListener("click", () => {
    active = "focus";
    removeFocus();
    focusButton.classList.add("btn-focus");
    pauseTimer();
    resetTime();
});

shortBreakButton.addEventListener("click", () => {
    active = "short";
    removeFocus();
    shortBreakButton.classList.add("btn-focus");
    pauseTimer();
    resetTime();
});

longBreakButton.addEventListener("click", () => {
    active = "long";
    removeFocus();
    longBreakButton.classList.add("btn-focus");
    pauseTimer();
    resetTime();
});

pause.addEventListener("click", () => {
    pauseTimer();
    startBtn.classList.add("show");
    startBtn.classList.remove("hide");
    pause.classList.add("hide");
    pause.classList.remove("show");
});

startBtn.addEventListener("click", () => {
    if (paused) {
        paused = false;
        startBtn.classList.add("hide");
        startBtn.classList.remove("show");
        pause.classList.add("show");
        pause.classList.remove("hide");
        reset.classList.add("show");
        reset.classList.remove("hide");
        
        set = setInterval(() => {
            if (count === 0) {
                if (minCount === 0) {
                    clearInterval(set);
                } else {
                    minCount--;
                    count = 59;
                }
            } else {
                count--;
            }
            time.textContent = `${appendZero(hoursCount)}:${appendZero(minCount)}:${appendZero(count)}`;
        }, 1000);
    }
});
