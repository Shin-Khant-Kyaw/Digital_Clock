let startTime = 0;
let elapsedTime = 0;
let timeInterval = null;
let isRunning = false;

const display = document.getElementById("display");
const ms = document.getElementById("ms");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("reset");
const pauseStartBtn = document.getElementById("pauseStart");
const timeMarkingContainer = document.getElementById("timeMarkingContainer");

function updateTime() {
  
  const totalMilliseconds = elapsedTime + (Date.now() - startTime);

  const ms = Math.floor((totalMilliseconds % 1000) / 10);
  const seconds = Math.floor((totalMilliseconds / 1000) % 60);
  const minutes = Math.floor((totalMilliseconds / (1000 * 60)) % 60);
  const hours = Math.floor(totalMilliseconds / (1000 * 60 * 60));

 
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  const formattedMs = String(ms).padStart(2, '0');

  display.innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}.<span id="ms">${formattedMs}</span>`;

 
}

function start(){
    if(!isRunning){
        isRunning = true;

        startTime = Date.now();

        timeInterval = setInterval(updateTime, 10);
        resetBtn.innerHTML = `<i class="fa-solid fa-flag"></i>`;
    }
}
let laps = [];

function reset(){
    if(isRunning){
        mark();
    }else if(!isRunning){
        isRunning = false;
        clearInterval(timeInterval);
        startTime = 0;
        elapsedTime = 0;
        display.innerHTML = `00:00:00.<span>00</span>`
        pauseStartBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        startBtn.style.display = "";
        resetBtn.style.display = "none";
        pauseStartBtn.style.display = "none";
        timeMarkingContainer.innerHTML = "";
        laps = [];

    }


}

function pause(){
    if(isRunning){
        isRunning = false;
        elapsedTime += Date.now() - startTime;
        clearInterval(timeInterval);
        pauseStartBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
        resetBtn.innerHTML = `<i class="fa-solid fa-stop"></i>`;

    }else if(!isRunning){
        start();
         pauseStartBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
         resetBtn.innerHTML = `<i class="fa-solid fa-flag"></i>`;
         
    }

}


function mark() {
  if (!isRunning) return;
 
  const totalMilliseconds = elapsedTime + (Date.now() - startTime);


  const ms = Math.floor((totalMilliseconds % 1000) / 10);
  const seconds = Math.floor((totalMilliseconds / 1000) % 60);
  const minutes = Math.floor((totalMilliseconds / (1000 * 60)) % 60);
  const hours = Math.floor(totalMilliseconds / (1000 * 60 * 60));

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  const formattedMs = String(ms).padStart(2, '0');


  const currentMark = `${formattedHours}:${formattedMinutes}:${formattedSeconds}.${formattedMs}`;

  laps.push(currentMark);
  console.log("Marked time saved:", currentMark);
  console.log("All saved marks:", laps);

  const createMarkWrapper = document.createElement("div");
  const timeMarker = document.createElement("div");
  const divider = document.createElement("hr")
  const createId = document.createElement("p");
  const timeMark = document.createElement("p");

  timeMarker.className = "timeMarker d-flex gap-3 text-center";
  divider.className = "divider bg-primary text-primary";
  createId.className = "text-light mb-0";
  timeMark.className = "text-light mb-0";

  timeMarker.appendChild(createId);
  timeMarker.appendChild(timeMark);
  createMarkWrapper.appendChild(timeMarker);
  createMarkWrapper.appendChild(divider);




  laps.forEach((element, index) => {
    createId.innerText = "0" + (index + 1);
  });
  timeMark.innerText = currentMark;
  timeMarkingContainer.appendChild(createMarkWrapper);

  

}



startBtn.addEventListener("click", ()=>{
    start();
    startBtn.style.display = "none";
    resetBtn.style.display = "inline";
    pauseStartBtn.style.display = "inline";

})

resetBtn.addEventListener("click", ()=>{
    reset();


})

pauseStartBtn.addEventListener("click", ()=>{
    pause();

})

