

type LapsProps = {
    lapsArr : [] | string[]
}

function Laps({lapsArr}: LapsProps) {
  return (
    <div className="flex flex-col gap-1 text-zinc-200 text-sm justify-center items-center">{
     lapsArr.length >0 &&   lapsArr.map(lap => <p key={lap}>{lap}</p>)
    }</div>
  )
}

export default Laps