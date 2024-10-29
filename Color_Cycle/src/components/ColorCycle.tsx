import { useState, useRef } from "react"
import Box from "./Box"
import Form from "./Form"


function ColorCycle() {

 const [hex, setHex]  = useState('0')
 const [increment, setIncrement] = useState('0')
 const [color, setColor] = useState('0')
 const intervalRef = useRef<NodeJS.Timeout | null>(null);

 console.log(hex, increment, color)

  return (
   <section className="bg-white bg-opacity-30 w-full flex justify-center items-center flex-col gap-4 p-6 max-w-3xl mx-auto">
    <h1 className="text-amber-950 text-3xl text-center font-bold uppercase">Color Cycle</h1>
    <Form setHex={setHex} setIncrement={setIncrement}
     setColor={setColor}
      increment={increment}
      
       hex={hex}
        color={color}
        intervalRef={intervalRef}/>
    <Box color={color}/>
   </section>
  )
}

export default ColorCycle