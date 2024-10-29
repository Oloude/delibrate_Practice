import { VscDebugRestart } from "react-icons/vsc";

type ButtonProps = {
    name : string,
    handleClick : ()=>void
}

function Button({name, handleClick}: ButtonProps) {
  return (
    <div>
        <button onClick={handleClick} className="text-zinc-700 font-bold text-xl sm:text-3xl capitalize  hover:text-zinc-100 hover:cursor-pointer">{name==='restart' ? <VscDebugRestart className="w-7 h-7 sm:w-10 sm:h-10  hover:text-zinc-100 hover:cursor-pointer"/> : name}</button>
    </div>
  )
}

export default Button