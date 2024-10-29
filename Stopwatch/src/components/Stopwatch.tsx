import Button from "./Button"
import Timer from "./Timer"
import Laps from './Laps'
import { useState, useRef } from "react"
import { handleAddLap, handleClearLaps,handleRestart, handleStart, handleTimerPause } from "../utils"


function Stopwatch() {
    const [lapsArr, setLapsArr] = useState <[] | string[]>([])
    const [timer, setTimer] = useState(0)
    let timerRef = useRef<number| null>(null);


  return (
   <section className="max-w-4xl mx-auto  w-full flex flex-col gap-6">
    <div className="bg-zinc-100 bg-opacity-60 rounded p-6">
    <div className="flex items-center gap-4 justify-center r">
        <Button name="start" handleClick={()=>handleStart(setTimer, timerRef)}/>
        <Button name="stop" handleClick={()=>handleTimerPause(timerRef)}/>
        <Button name="lap" handleClick={()=>handleAddLap(timer, setLapsArr)}/ >
        <Button name="clear-lap" handleClick={()=>handleClearLaps(setLapsArr)}/>
        <Button name="restart" handleClick={()=>handleRestart(setTimer, timerRef)}/> 
    </div>
    <Timer timer={timer}/>
    </div>
      <Laps lapsArr={lapsArr}/>
   </section>
  )
}

export default Stopwatch