type TimerProps = {
    timerange : string,
    range : string
}

function Timer({timerange, range}: TimerProps) {
    
  return (
    <div className="bg-emerald-950 p-5 flex flex-col gap-2">
        <p className="text-emerald-100 font-black text-3xl sm:text-6xl">{timerange}</p>
        <span className="text-emerald-200 text-center text-sm uppercase font-medium">{range}</span>
    </div>
  )
}

export default Timer