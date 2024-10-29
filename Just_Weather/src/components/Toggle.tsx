import { handleUnit } from "../utils"

type ToggleProps ={
  unit : string,
  setUnit : React.Dispatch<React.SetStateAction<string>>
}

function Toggle({unit, setUnit}: ToggleProps) {
  return (
    <div onClick={()=>handleUnit(setUnit)} className="cursor-pointer bg-slate-300 flex gap-2 w-[70px] h-8 p-1 justify-between items-center rounded-full shadow-md self-end justify-self-end">
      <span className={`${unit === 'f' ? 'text-white bg-purple-600' : 'text-black bg-inherit'} text-base font-medium  w-7 h-7 flex justify-center items-center rounded-full`}>&deg;F</span>
      <span className={`${unit === 'c' ? 'text-white bg-purple-600' : 'text-black bg-inherit'} text-base font-medium  w-7 h-7 flex justify-center items-center rounded-full`}>&deg;C</span>
    </div>
  )
}

export default Toggle