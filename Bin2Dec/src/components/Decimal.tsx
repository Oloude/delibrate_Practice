type DecimalProps = {
decimal : string
}

function Decimal({decimal}:DecimalProps) {
  return (
    <div className="flex flex-col gap-2">
        <label htmlFor="" className="text-teal-800 font-semibold text-base">Decimal Output:</label>
        <div className="bg-inherit border border-teal-800 text-teal-800 p-3 outline-none">{decimal}</div>
    </div>
  )
}

export default Decimal