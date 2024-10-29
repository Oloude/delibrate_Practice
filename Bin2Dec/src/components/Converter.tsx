import { useState } from "react"
import Binary from "./Binary"
import Button from "./Button"
import Decimal from "./Decimal"


function Converter() {

   const [binary, setBinary] = useState('')
   const [decimal, setDecimal] = useState('')
   const [error, setError] = useState('')


  return (
    <section className="max-w-2xl mx-auto bg-white bg-opacity-50 rounded-xl w-full p-6 flex flex-col">
        <h1 className="text-center text-3xl font-bold text-teal-950 mb-10">Binary 2 Decimal Converter</h1>
        <Binary setBinary={setBinary} error={error}/>
        <Button setDecimal={setDecimal} setError={setError} binary={binary}/>
        <Decimal decimal={decimal}/>
    </section>
  )
}

export default Converter