import { handleBack, handleNext, handleConfirm } from "../utils"
import { NavigationProps } from "../type"




function Navigation({pageNumber, setPageNumber,nameValidation, emailValidation, phoneValidation, setIsConfirm} : NavigationProps) {

  function handleClick(){
    if(pageNumber < 4){
      handleNext(setPageNumber)
    }else{
      handleConfirm(nameValidation.value, emailValidation.value, phoneValidation.value, setIsConfirm)
    }
    }

  return (
    <div className="flex justify-between items-center bg-white w-full p-4  mt-16 lg:mt-0 lg:pt-10">
       {pageNumber > 1 && (<button onClick={()=>handleBack(setPageNumber)} className="outline-none text-coolGray font-medium text-base hover:text-marineBlue">Go Back</button>)}
        <button  onClick={handleClick} className="outline-none bg-marineBlue rounded text-base text-alabaster font-medium py-2 px-6">{pageNumber === 4 ? 'Confirm ': 'Next Step'}</button>
    </div>
  )
}

export default Navigation