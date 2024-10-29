import {covertBinary} from '../utils'
import { Dispatch, SetStateAction } from 'react';


type ButtonProps = {
    setDecimal : Dispatch<SetStateAction<string>>,
    setError : Dispatch<SetStateAction<string>>,
    binary : string
}

function Button({setDecimal, setError, binary}: ButtonProps) {
  return (
   <button onClick={()=>covertBinary(binary, setError, setDecimal)} className="bg-teal-950 text-teal-50 font-bold text-lg uppercase py-3 px-6 text-center self-center hover:bg-inherit hover:text-teal-950 hover:border hover:border-teal-950 mb-5">Convert</button>
  )
}

export default Button