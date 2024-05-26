const currentTime = document.querySelector("h1"),
    content = document.querySelector('.content'),
    selectMenu = document.querySelectorAll('select'),
    btnSetAlarm = document.querySelector('button'),
    ringTone = document.getElementById("ringTone");

let alarmTime = null,
    isAlarmSet = false,
    timerId = null;

setInterval(() => {
    let date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds(),
        ampm = "AM";

    if (hours >= 12) {
        hours = hours - 12;
        ampm = "PM";
    }

    hours = hours == 0 ? 12 : hours;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    currentTime.innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`;

    // Verificação de alarme
    if (isAlarmSet && alarmTime) {
        let now = `${hours}:${minutes} ${ampm}`;
        if (now === alarmTime) {
            ringTone.play();
            ringTone.loop = true;
            isAlarmSet = false;
        }
    }
}, 1000);

for (let i = 12; i > 0; i--) {
    let option = `<option value="${i < 10 ? `0${i}` : i}">${i < 10 ? `0${i}` : i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    let option = `<option value="${i < 10 ? `0${i}` : i}">${i < 10 ? `0${i}` : i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

function setAlarm() {
    if (isAlarmSet) {
        alarmTime = null;
        ringTone.pause();
        ringTone.currentTime = 0;
        content.classList.remove("disable");
        btnSetAlarm.innerHTML = "Ativar Alarme";
        return isAlarmSet = false;
    }

    let hours = selectMenu[0].value,
        minutes = selectMenu[1].value,
        ampm = selectMenu[2].value;

    if (hours === "Hour" || minutes === "Minute" || ampm === "AM/PM") {
        return alert("Insira horas e minutos válidos para ativar o alarme, por favor!");
    }

    alarmTime = `${hours}:${minutes} ${ampm}`;
    isAlarmSet = true;
    content.classList.add("disable");
    btnSetAlarm.innerHTML = "Desativar Alarme";
}

btnSetAlarm.addEventListener("click", setAlarm);
