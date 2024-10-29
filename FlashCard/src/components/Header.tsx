import Dropdown from "./Dropdown"
import { getCategory, getLevel, handleCategory, handleLevel } from "../utils"

type HeaderProps = {
    setCategory : React.Dispatch<React.SetStateAction<string>>,
    setLevel : React.Dispatch<React.SetStateAction<string>>
}


function Header({setCategory, setLevel}: HeaderProps) {
  return (
    <header className="flex gap-3 justify-end mb-10">
        <Dropdown handleChange={(e: React.ChangeEvent<HTMLSelectElement>)=>handleCategory(setCategory, e.target.value)}>
          {getCategory().map((item)=> <option key={item.title} value={item.value}>{item.title}</option>)}
        </Dropdown>
        <Dropdown handleChange={(e: React.ChangeEvent<HTMLSelectElement>)=>handleLevel(setLevel, e.target.value)}>
            {getLevel().map(item => <option key={item} value={item}>{item}</option>)}
        </Dropdown>
    </header>
  )
}

export default Header