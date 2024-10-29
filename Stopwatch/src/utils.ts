

function handleStart(setTimer: React.Dispatch<React.SetStateAction<number>>, timerRef: React.MutableRefObject<number | null>) {
  if (timerRef.current) return; // Prevent multiple intervals
  timerRef.current = setInterval(() => {
    setTimer((prev) => prev + 10); // Increment by 10ms for better millisecond precision
  }, 10); // Update every 10ms
}


function handleRestart(setTimer: React.Dispatch<React.SetStateAction<number>>, timerRef:React.MutableRefObject<number | null>) {
  setTimer(0);
  handleTimerPause(timerRef); // Clear the interval when restarting
}

function handleTimerPause(timerRef:React.MutableRefObject<number | null>) {
  if (timerRef.current) {
    clearInterval(timerRef.current);
    timerRef.current = null; // Clear the reference to the timer
  }
}

function handleAddLap(timer: number, setLaps: React.Dispatch<React.SetStateAction<string[]>>) {
  setLaps((prev) => [...prev, formatTimer(timer/1000)]);
}

function handleClearLaps(setLaps: React.Dispatch<React.SetStateAction<string[]>>) {
  setLaps([]);
}

function formatTimer(time: number) {
  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60);

  const minutes = min < 10 ? "0" + min : min;
  const seconds = sec < 10 ? "0" + sec : sec;
 
  return `${minutes}:${seconds}`;
}

function formatTimerMills(timeInMilliseconds: number) {
  const min = Math.floor(timeInMilliseconds / 60000); // 60000 ms = 1 minute
  const sec = Math.floor((timeInMilliseconds % 60000) / 1000); // Get seconds from the remaining ms after extracting minutes
  const millis = timeInMilliseconds % 1000; // Get the remaining milliseconds

  const minutes = min < 10 ? '0' + min : min;
  const seconds = sec < 10 ? '0' + sec : sec;
  const milliseconds = millis < 100 ? (millis < 10 ? '00' + millis : '0' + millis) : millis;

  return `${minutes}:${seconds}:${milliseconds}`;
}




export { handleAddLap, handleStart, handleRestart, handleTimerPause, handleClearLaps, formatTimer, formatTimerMills };
