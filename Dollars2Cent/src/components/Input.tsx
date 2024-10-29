import { handleDollar } from "../utils"


type InputProps = {
    setDollar : React.Dispatch<React.SetStateAction<string>>,
    setError : React.Dispatch<React.SetStateAction<string>>,
    error : string
}

function Input({setDollar, setError,error}: InputProps) {
  return (
    <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="" className="text-teal-600  text-base font-semibold">Dollar</label>
        <input onChange={(e)=>handleDollar(setDollar, setError, e.target.value)} type="number" name="" id="" className="text-teal-600 border border-teal-600 bg-inherit outline-none p-3"/>
        <span className="text-sm text-red-600 font-medium">{error}</span>
    </div>
  )
}

export default Input