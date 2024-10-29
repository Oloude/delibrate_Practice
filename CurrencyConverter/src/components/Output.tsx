type OutputProps = {
    output : string
}


function Output({output} : OutputProps) {
  return (
    <div className="flex bg-slate-600 min-h-16 p-4 text-4xl font-bold text-slate-100 rounded-lg justify-center items-center">{output}</div>
  )
}

export default Output