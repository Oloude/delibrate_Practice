type BoxProps = {
    color : string
}

function Box({color}:BoxProps) {

    console.log(color)
  return (
    <div className="bg-slate-950 w-48 h-48" style={{backgroundColor : `#${color}`}}></div>
  )
}

export default Box