const resetButton = document.getElementsByClassName("resest")[0];
const playButton = document.getElementsByClassName("play")[0];
const lapButton = document.getElementsByClassName("lap")[0];
const hour = document.getElementsByClassName("hour")[0];
const minute = document.getElementsByClassName("minute")[0];
const second = document.getElementsByClassName("sec")[0];
const centisecond = document.getElementsByClassName("msec")[0];
const laps = document.getElementsByClassName("laps")[0];
const clearButton = document.getElementsByClassName("clearall")[0];



const toggleButton = () => {
    lapButton.classList.remove("hidden") 
    resetButton.classList.remove("hidden")
}

let isplay = false;
let seccounter = 0;
let sec;
let centicounter = 0;
let centisec;
let minCounter = 0;
let min;
let isReset = false;
let lapItem = 0;
let hr;
let hrCounter = 0;

const play = () => {
    if(!isplay && !isReset){
        playButton.innerHTML = 'Pause';
        hr = setInterval(() => {
            if (hrCounter === 12){
                minCounter = 0;
            }
            hour.innerHTML = `${++hrCounter}`;
        }, 12*60*1000);
        min = setInterval(() => {
            if (minCounter === 60){
                minCounter = 0;
            }
            minute.innerHTML = `: ${++minCounter} `;
        }, 60*1000);
        sec = setInterval(() => {
            if (seccounter === 60){
                seccounter = 0;
            }
            second.innerHTML = `: ${++seccounter} : `;
        }, 1000);
        centisec = setInterval(() => { 
            if (centicounter === 100){
                centicounter =0;
            }
            centisecond.innerHTML = ` ${++centicounter}`;
        }, 10);
        isplay = true;
        isReset = true;
    }else{
        playButton.innerHTML = 'Play';
        clearInterval(hr)
        clearInterval(min);
        clearInterval(sec);
        clearInterval(centisec);
        isplay = false;
        isReset = false;
    }
    toggleButton();
}
const resest = () => {
    isReset = true;
    seccounter = 0;
    play();
    clearall();
    lapButton.classList.add("hidden");
    resetButton.classList.add("hidden");
    hour.innerHTML = '00'
    minute.innerHTML = '&nbsp;00'
    second.innerHTML = '&nbsp;00'
    centisecond.innerHTML = '&nbsp;00';
}
const lap1 = () => {
    const li = document.createElement("li");
    const number = document.createElement("span");
    const timeStamp = document.createElement("span");

    li.setAttribute("class", "lap-item");
    number.setAttribute("class", "number");
    timeStamp.setAttribute("class", "time-stamp");

    number.innerText = `${++lapItem}`
    timeStamp.innerHTML = `${minCounter} : ${seccounter} : ${centicounter}`;

    li.append(number,timeStamp);
    laps.append(li);

    clearButton.classList.remove("hidden");
}
const clearall = () => {
    laps.innerHTML = '';
    laps.append(clearButton)
    clearButton.classList.add("hidden")
    lapItem=0
}

playButton.addEventListener("click", play);
resetButton.addEventListener("click", resest);
lapButton.addEventListener("click", lap1 ,"<br>");
clearButton.addEventListener("click", clearall)