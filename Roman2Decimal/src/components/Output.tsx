type OutputProps = {
    output : string
}

function Output({output} : OutputProps) {
  return (
    <div className="flex flex-col gap-2">
        <p className="text-purple-500 text-base font-semibold">Decimal</p>
        <div className="text-purple-50 bg-purple-700 rounded-md min-h-12 flex justify-center items-center text-5xl font-semibold p-4">{output}</div>
    </div>
  )
}

export default Output