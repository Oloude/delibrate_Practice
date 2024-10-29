
import {formatTimerMills} from '../utils'


type TimerProps = {
    timer:number
}

function Timer({timer}:TimerProps) {
 
  return (
    <div className="text-center font-black text-zinc-950 text-4xl sm:text-6xl  lg:text-[10rem]">{timer ? formatTimerMills(timer ) : "00: 00 : 00"}</div>
  )
}

export default Timer