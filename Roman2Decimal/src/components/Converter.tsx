import { useState } from "react"
import Input from "./Input"
import Output from "./Output"
import Rule from "./Rule"
import { getDecimal } from "../utils"


function Converter() {
    const [roman, setRoman] = useState('')
    const [output, setOutput] = useState('')
    const [error, setError] = useState('')

   
  return (
    <section className="max-w-3xl mx-auto bg-black bg-opacity-30 rounded-xl p-6 flex flex-col gap-5">
        <h1 className="text-3xl font-bold text-purple-600 text-center lg:text-4xl mb-16">Roman Numeral 2 Decimal Converter</h1>
        <Input setError={setError} setRoman={setRoman} error={error}/>
        <Output output={output}/>
        <button onClick={()=>getDecimal(setOutput, roman)} className="bg-purple-300 py-3 px-10 rounded-full mb-16 font-bold self-center hover:bg-opacity-50">convert</button>
        <Rule/>
    </section>
  )
}

export default Converter