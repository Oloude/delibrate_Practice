import Search from "./Search"
import Toggle from "./Toggle"
import logo from '../assets/logo.svg'

type HeaderProps ={
  unit : string,
  setUnit : React.Dispatch<React.SetStateAction<string>>
}


function Header({unit,setUnit}: HeaderProps) {
  return (
    <header className="grid grid-cols-2 grid-rows-2 sm:grid-cols-[auto_1fr_auto] sm:grid-rows-1 gap-4 mb-16">
      <div className="self-end">
        <img src={logo} alt="" />
      </div>
      <Search/>
      <Toggle unit={unit} setUnit={setUnit}/>
    </header>
  )
}

export default Header