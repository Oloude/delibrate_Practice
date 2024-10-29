import { useState } from "react"
import Box from "./Box"
import ClipBoard from "./ClipBoard"
import Input from "./Input"

function BorderRadius() {

const [borderRadius, setBorderRadius]  =  useState({
      'top-left' : 0,
      'top-right' : 0,
      'bottom-left' : 0,
      'bottom-right' : 0,
    })

    console.log(borderRadius)

  return (
   <section className="max-w-2xl mx-auto relative flex w-full">
    <Box borderRadius={borderRadius}>
        <ClipBoard borderRadius={borderRadius}/>
    </Box>
    <Input position={'top-left'} setBorderRadius={setBorderRadius}/>
    <Input position={'top-right'} setBorderRadius={setBorderRadius}/>
    <Input position={'bottom-left'} setBorderRadius={setBorderRadius}/>
    <Input position={'bottom-right'} setBorderRadius={setBorderRadius}/>
   </section>
  )
}

export default BorderRadius