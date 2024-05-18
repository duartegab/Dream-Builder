let focusButton = document.getElementById("focus");
let buttons = document.querySelectorAll(".btn");
let shortBreakButton = document.getElementById("shortbreak");
let longBreakButton = document.getElementById("longbreak");
let startBtn = document.getElementById("btn-start");
let reset = document.getElementById("btn-reset");
let pause = document.getElementById("btn-pause");
let time = document.getElementById("time");

let set;
let active = "focus";
let count = 59;
let paused = true;
let minCount = 24;
time.textContent = `${minCount + 1}:00`;

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
            minCount = 299;
            break;
        case "short":
            minCount = 4;
            break;
        default:
            minCount = 24;
            break;
    }
    count = 59;
    time.textContent = `${appendZero(minCount + 1)}:00`;
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
            time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
        }, 1000);
    }
});
