type HourProps = {
  time: string, 
  tempF: string,
  tempC: string,
  unit: string,
  img:  string
}

function HourForcast({time, tempF, tempC, unit, img}: HourProps) {
  return (
    <div className="flex flex-col gap-3 items-center bg-slate-100 rounded-md px-6 py-3">
      <p className="text-sm text-slate-600 font-medium">{time}</p>
      <div><img src={img} alt="" /></div>
      <p className="text-sm text-slate-950 font-semibold">{unit === 'f' ? tempF : tempC}&deg;</p>
    </div>
  )
}

export default HourForcast