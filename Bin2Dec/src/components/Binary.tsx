import { handleBinary } from "../utils"
import { Dispatch, SetStateAction } from 'react';


type BinaryProps = {
    setBinary : Dispatch<SetStateAction<string>>,
    error : string
}

function Binary({setBinary, error}:BinaryProps) {
  return (
    <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="" className="text-teal-800 font-semibold text-base">Binary Input:</label>
        <input onChange={(e)=>handleBinary(setBinary, e.target.value)}
        defaultValue={0} type="number" name="" id="" className="bg-inherit border border-teal-800 text-teal-800 p-3 outline-none " placeholder="Enter 0 or 1"/>
        <span className="text-sm font-bold text-red-500">{error}</span>
    </div>
  )
}

export default Binary