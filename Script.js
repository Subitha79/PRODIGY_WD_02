let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function timeToString(time) 
{
  const hrs = String(Math.floor(time / 3600000)).padStart(2, '0');
  const mins = String(Math.floor((time % 3600000) / 60000)).padStart(2, '0');
  const secs = String(Math.floor((time % 60000) / 1000)).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

function startPause()
{
  const btn = document.getElementById("startPauseBtn");

  if (!isRunning) 
  {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      document.getElementById('display').textContent = timeToString(elapsedTime);
    }, 1000);
    isRunning = true;
    btn.textContent = "Pause";
  } 
  else 
  {
    clearInterval(timerInterval);
    isRunning = false;
    btn.textContent = "Start";
  }
}

function reset() 
{
  clearInterval(timerInterval);
  elapsedTime = 0;
  document.getElementById('display').textContent = "00:00:00";
  document.getElementById('laps').innerHTML = "";
  document.getElementById('startPauseBtn').textContent = "Start";
  isRunning = false;
}

function recordLap() 
{
  if (isRunning) 
  {
    const lapTime = timeToString(elapsedTime);
    const li = document.createElement('li');
    li.textContent = `Lap: ${lapTime}`;
    document.getElementById('laps').appendChild(li);
  }
}