import { ReactNode } from "react"


type DropdownProps = {
    children : ReactNode,
    handleChange : (e:React.ChangeEvent<HTMLSelectElement>)=> void
}

function Dropdown({children, handleChange}: DropdownProps) {
  return (
    <div>
        <select onChange={handleChange} name="" id="" className="outline-none bg-slate-200 text-slate-900 capitalize">
        {children}
        </select>
    </div>
  )
}

export default Dropdown