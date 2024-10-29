import { useState } from "react"
import Input from "./Input"
import Output from "./Output"
import {convertDollar} from '../utils'


function Converter() {
 const [dollar, setDollar] = useState('')
 const [output, setOutput] = useState<number[] | []>([])
 const [error, setError] = useState('')

  return (
   <section className="max-w-3xl mx-auto bg-white bg-opacity-50 p-6 flex flex-col w-full">
    <h1 className="text-teal-950 text-4xl font-bold text-center mb-10">Dollars 2 cent converter</h1>
    <Input setDollar={setDollar} setError={setError} error={error}/>
    <Output output={output}/>
    <button onClick={()=>convertDollar(dollar, setOutput)} className="text-teal-100 bg-teal-950 py-3 px-10 rounded-full font-semibold text-base self-center hover:bg-inherit hover:border hover:border-teal-950 hover:text-teal-950">Convert</button>
   </section>
  )
}

export default Converter