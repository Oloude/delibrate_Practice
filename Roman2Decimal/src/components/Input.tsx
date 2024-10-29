import { handleRomanChange } from "../utils"


type InputProps ={
    setError : React.Dispatch<React.SetStateAction<string>>,
     setRoman : React.Dispatch<React.SetStateAction<string>>,
    error :string
    }


function Input({setError, setRoman, error} :InputProps) {
  return (
    <div className="flex flex-col gap-2">
        <label htmlFor="" className="text-purple-500 text-base font-semibold">Roman numeral</label>
    <input onChange={(e)=>handleRomanChange(setRoman, setError, e.target.value)} type="text"  placeholder="CVXX" className="outline-none bg-purple-700 p-3 rounded-lg text-purple-50 text-base"/>
    <span className="text-purple-100 font-bold text-sm">{error}</span>
    </div>
  )
}

export default Input