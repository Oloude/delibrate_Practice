import { useRef } from 'react';

function handleHexChange(setSecond: React.Dispatch<React.SetStateAction<string>>, setColor: React.Dispatch<React.SetStateAction<string>>, value: string) {
  if (value.length <= 6 && value) {
    setSecond(value);
    setColor(value);
  }
}

function handleIncrementChange(setSecond: React.Dispatch<React.SetStateAction<string>>, value: string) {
  if (value.length < 3 && value) {
    setSecond(value);
  }
}

function handleStart(intervalRef: React.MutableRefObject<NodeJS.Timeout | null>, setColor: React.Dispatch<React.SetStateAction<string>>, increment: string, color: string) {
  if (intervalRef.current) {
    clearInterval(intervalRef.current); // Clear any existing intervals before starting a new one
  }

  intervalRef.current = setInterval(() => {
    setColor((prev) => {
      let hexAsInt = parseInt(prev, 16);
      let incrementAsInt = parseInt(increment, 16);

      let resultAsInt = hexAsInt + incrementAsInt;

      let resultHexString = resultAsInt.toString(16);
      let paddedResult = resultHexString.padStart(prev.length, '0');

      return paddedResult.toUpperCase();
    });
  }, 1000);
}

function handleStop(intervalRef: React.MutableRefObject<NodeJS.Timeout | null>) {
  if (intervalRef.current) {
    clearInterval(intervalRef.current); // Stop the color cycle
    intervalRef.current = null; // Reset the interval ID
  }
}

export { handleHexChange, handleIncrementChange, handleStart, handleStop };
