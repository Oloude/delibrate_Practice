import { getInputClasses, handleInputChange } from "../utils"


type InputProps = {
    position : string,
    setBorderRadius : React.Dispatch<React.SetStateAction<{
        'top-left': number;
        'top-right': number;
        'bottom-left': number;
        'bottom-right': number;
    }>>
}

function Input({position, setBorderRadius}:InputProps) {
  return (
    <div className={`${getInputClasses(position)} absolute  w-10 h-6`}>
        <input onChange={(e)=> handleInputChange(setBorderRadius, position, e.target.value)}
     type="number" placeholder="0" className="outline-none bg-stone-800 p-1 font-bold text-stone-50 text-base w-full"/></div>
  )
}

export default Input