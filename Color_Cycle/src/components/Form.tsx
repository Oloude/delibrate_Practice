import { handleHexChange, handleIncrementChange, handleStart, handleStop } from "../utils"



type FormProps = {
    setHex :  React.Dispatch<React.SetStateAction<string>>,
    setIncrement :  React.Dispatch<React.SetStateAction<string>>,
    setColor :  React.Dispatch<React.SetStateAction<string>>,
    increment : string,
    hex : string,
    color : string,
    intervalRef :  React.MutableRefObject<NodeJS.Timeout | null>
}

function Form({setHex, setIncrement, setColor, increment, color, intervalRef}:FormProps) {
  return (
    <div className="flex flex-col gap-4 w-full mb-10">
        <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-base text-yellow-900 font-semibold">Enter a starting hex value</label>
            <input onChange={(e)=>handleHexChange(setHex, setColor, e.target.value)} 
            type="number" name="" id="" placeholder="002343" className="text-amber-950 border-2 border-amber-950 font-semibold bg-inherit p-3 outline-none placeholder:text-amber-950"/>
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-base text-yellow-900 font-semibold">Enter an increment value for the cycle</label>
            <input onChange={(e)=>handleIncrementChange(setIncrement, e.target.value)} 
             type="number" name="" id="" placeholder="25" className="text-amber-950 border-2 border-amber-950 font-semibold bg-inherit p-3 outline-none placeholder:text-amber-950 "/>
        </div>

        <div className="flex gap-4">
            <button onClick={()=>handleStart(intervalRef,setColor,increment,color)} className="bg-amber-950 text-amber-50 py-2 px-5">Start</button>
            <button onClick={()=>handleStop(intervalRef)} className="bg-orange-800 text-orange-100 py-2 px-5">Stop</button>
        </div>
    </div>
  )
}

export default Form