import { handlePageNumber } from "../utils"


type HeaderProps = {
    pageNumber : number, 
    setPageNumber : React.Dispatch<React.SetStateAction<number>>
  }

function Header({pageNumber, setPageNumber}:HeaderProps) {
  return (
    <header className="bg-mobile h-52 bg-cover bg-center w-full bg-no-repeat pt-10 lg:bg-desktop lg:pl-8 lg:rounded-md lg:h-auto lg:pt-10 lg:basis-1/3">
        <div className="flex gap-3 justify-center items-center lg:flex-col lg:items-start lg:gap-5">
            <div className="flex gap-3 items-center" >
                <div onClick={()=>handlePageNumber(setPageNumber, 1)} className={` ${pageNumber === 1 ? 'bg-lightBlue text-marineBlue' : 'text-white bg-inherit'} w-10 h-10 border border-lightGray rounded-full font-bold text-base  flex items-center justify-center`}>1</div>
                <div className=" flex-col gap-1 hidden lg:flex">
                    <p className="text-base text-coolGray uppercase">Step 1</p>
                    <h3 className="text-magnolia font-semibold uppercase text-base">Your info</h3>
                </div>
            </div>

            <div className="flex gap-3 items-center" >
                <div onClick={()=>handlePageNumber(setPageNumber, 2)} className={` ${pageNumber === 2 ? 'bg-lightBlue text-marineBlue' : 'text-white bg-inherit'} w-10 h-10 border border-lightGray rounded-full font-bold text-base  flex items-center justify-center`}>2</div>
                <div className=" flex-col gap-1 hidden lg:flex">
                    <p className="text-base text-coolGray uppercase">Step 2</p>
                    <h3 className="text-magnolia font-semibold uppercase text-base">Select plan</h3>
                </div>
            </div>

            <div className="flex gap-3 items-center" >
                <div onClick={()=>handlePageNumber(setPageNumber, 3)} className={` ${pageNumber === 3 ? 'bg-lightBlue text-marineBlue' : 'text-white bg-inherit'} w-10 h-10 border border-lightGray rounded-full font-bold text-base  flex items-center justify-center`}>3</div>
                <div className=" flex-col gap-1 hidden lg:flex">
                    <p className="text-base text-coolGray uppercase">Step 3</p>
                    <h3 className="text-magnolia font-semibold uppercase text-base">Add-ons</h3>
                </div>
            </div>

            <div className="flex gap-3 items-center" >
                <div onClick={()=>handlePageNumber(setPageNumber, 4)} className={` ${pageNumber === 4 ? 'bg-lightBlue text-marineBlue' : 'text-white bg-inherit'} w-10 h-10 border border-lightGray rounded-full font-bold text-base  flex items-center justify-center`}>4</div>
                <div className=" flex-col gap-1 hidden lg:flex">
                    <p className="text-base text-coolGray uppercase">Step 4</p>
                    <h3 className="text-magnolia font-semibold uppercase text-base">Summary </h3>
                </div>
            </div>
           
        </div>

    </header>
  )
}

export default Header