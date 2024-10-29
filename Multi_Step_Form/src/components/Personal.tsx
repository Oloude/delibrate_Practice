import Navigation from "./Navigation"
import { validateEmailInput, validateNameInput, validatePhoneInput } from "../utils"
import { PersonalProps } from "../type"

function Personal({pageNumber, setPageNumber, setNameValidation, nameValidation,
    setEmailValidation, emailValidation,
    setPhoneValidation, phoneValidation, setIsConfirm}:PersonalProps) {
  return (
    <div className='lg:flex flex-col'>
    <div className="bg-white rounded-lg px-6 py-9 mx-9 shadow-lg -mt-32 lg:mt-0 flex flex-col lg:shadow-none">
        <h1 className="text-3xl font-bold text-marineBlue mb-3">Personal info  </h1>
        <p className="text-lg font-medium text-coolGray mb-8">Please provide your name, email address, and phone number.</p>
        <div className="mb-4">
            <div className="flex gap-3 justify-between items-center ">
                <label htmlFor="" className="text-marineBlue font-semibold text-sm">Name </label>
                <span className="text-sm font-medium text-strawberryRed">{nameValidation.error}</span>
            </div>
            <input onChange={(e)=>validateNameInput(setNameValidation, e.target.value )} type="text" placeholder="e.g. Stephen King"  className={`${nameValidation.error ? 'border-strawberryRed' : 'border-magnolia'} border-2  outline-none rounded py-2 px-2 text-base font-medium text-marineBlue w-full`}/>
        </div>
        <div className="mb-4">
            <div className="flex gap-3 justify-between items-center ">
                <label htmlFor="" className="text-marineBlue font-semibold text-sm">Email Address</label>
                <span className="text-sm font-medium text-strawberryRed">{emailValidation.error}</span>
            </div>
            <input onChange={(e)=>validateEmailInput(setEmailValidation, e.target.value )} type="email" placeholder="e.g. stephenking@lorem.com"  className={`${emailValidation.error ? 'border-strawberryRed' : 'border-magnolia'} border-2  outline-none rounded py-2 px-2 text-base font-medium text-marineBlue w-full`}/>
        </div>   
        <div>
            <div className="flex gap-3 justify-between items-center">
                <label htmlFor="" className="text-marineBlue font-semibold text-sm">Phone Number</label>
                <span className="text-sm font-medium text-strawberryRed">{phoneValidation.error}</span>
            </div>
            <input onChange={(e)=>validatePhoneInput(setPhoneValidation, e.target.value )} type="phone" placeholder="e.g. +1 234 567 890"  className={`${phoneValidation.error ? 'border-strawberryRed' : 'border-magnolia'} border-2  outline-none rounded py-2 px-2 text-base font-medium text-marineBlue w-full`}/>
        </div>

       
    </div>
    <Navigation setPageNumber={setPageNumber} pageNumber={pageNumber}
     nameValidation={nameValidation} phoneValidation={phoneValidation}
      emailValidation={emailValidation} setIsConfirm={setIsConfirm}/>
    </div>
  )
}

export default Personal