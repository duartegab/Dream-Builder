const currentTime = document.querySelector("h1"),
    content = document.querySelector('.content'),
    selectMenu = document.querySelectorAll('select'),
    btnSetAlarm = document.querySelector('button'),
    ringTone = document.getElementById("ringTone");

let initialTime = null;  // Variável para armazenar o tempo inicial
let alarmTime, minutesLeft, isAlarmSet;

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

    hours = hours == 0 ? hours = 12 : hours;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    currentTime.innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`;

    // Comparar tempo atual com o tempo inicial para verificar se um minuto completo se passou
    if (isAlarmSet && initialTime) {
        let currentTime = new Date().getTime();
        let elapsed = Math.floor((currentTime - initialTime) / 1000);
        if (elapsed >= 60) {
            ringTone.play();
            ringTone.loop = true;
            isAlarmSet = false;
        }
    }

}, 1000);

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

function setAlarm() {
    if (isAlarmSet) {
        alarmTime = "";
        initialTime = null;
        ringTone.pause();
        ringTone.currentTime = 0;  // Reset the audio to the beginning
        content.classList.remove("disable");
        btnSetAlarm.innerHTML = "Ativar Alarme";
        return isAlarmSet = false;
    }

    let hours = selectMenu[0].value,
        minutes = selectMenu[1].value,
        ampm = selectMenu[2].value;

    if (hours === "Hour" && minutes !== "Minute") {
        let currentMinutes = new Date().getMinutes();
        minutesLeft = (currentMinutes + parseInt(minutes)) % 60;
        initialTime = new Date().getTime();  // Armazenar o tempo inicial em milissegundos
    } else if (hours.includes("Hour") || minutes.includes("Minute") || ampm.includes("AM/PM")) {
        return alert("Insira horas e minutos válidos para ativar o alarme, por favor!");
    } else {
        // Set full alarm with hours and minutes
        alarmTime = `${hours}:${minutes} ${ampm}`;
    }

    isAlarmSet = true;
    content.classList.add("disable");
    btnSetAlarm.innerHTML = "Desativar Alarme";
}

btnSetAlarm.addEventListener("click", setAlarm);
