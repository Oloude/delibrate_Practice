type OutputProps = {
    output : number[] | []
}

function Output({output}:OutputProps) {
  return (
    <div className="flex flex-col gap-2 mb-10">
        <p className="text-teal-600  text-base font-semibold">Output</p>
        <div className="text-teal-600 border border-teal-600 min-h-12 p-3">
          {output.map((item, idx )=> <p key={idx}>{item} {idx === 0 ? 'quater' : idx === 1 ? 'dime' : idx === 2 ? 'nickel' : 'penny'}</p>)}
        </div>
    </div>
  )
}

export default Output