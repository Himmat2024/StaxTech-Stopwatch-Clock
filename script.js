
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  document.getElementById("clock").textContent = `${h}:${m}:${s}`;
}
setInterval(updateClock, 1000);
updateClock();


let stopwatchInterval;
let elapsedSeconds = 0;
const stopwatchDisplay = document.getElementById("stopwatch");
const startStopBtn = document.getElementById("startStopBtn");

function formatTime(secs) {
  const hrs = String(Math.floor(secs / 3600)).padStart(2, '0');
  const mins = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
  const secsLeft = String(secs % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secsLeft}`;
}

function updateStopwatch() {
  elapsedSeconds++;
  stopwatchDisplay.textContent = formatTime(elapsedSeconds);
}

function toggleStartStop() {
  if (stopwatchInterval) {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    startStopBtn.textContent = "Start";
    startStopBtn.classList.remove("stop");
    startStopBtn.classList.add("start");
  } else {
    stopwatchInterval = setInterval(updateStopwatch, 1000);
    startStopBtn.textContent = "Stop";
    startStopBtn.classList.remove("start");
    startStopBtn.classList.add("stop");
  }
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
  elapsedSeconds = 0;
  stopwatchDisplay.textContent = "00:00:00";
  startStopBtn.textContent = "Start";
  startStopBtn.classList.remove("stop");
  startStopBtn.classList.add("start");
}
0