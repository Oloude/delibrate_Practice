import Navigation from "./Navigation"
import { handleAddOnsChange } from "../utils";
import { AddOnProps } from "../type";



function AddOn({pageNumber, setPageNumber, setAddOns, addOns, date,
  nameValidation, emailValidation, phoneValidation, setIsConfirm
}:AddOnProps) {
  return (
    <div className='lg:flex flex-col'>
    <div className="bg-white rounded-lg px-6 py-9 mx-9 shadow-lg -mt-32 lg:mt-0 flex flex-col lg:shadow-none">
      <h2 className="text-3xl font-bold text-marineBlue mb-3">Pick add-ons </h2>
      <p className="text-lg font-medium text-coolGray mb-8">Add-ons help enhance your gaming experience. </p>
      <div className="flex flex-col gap-4">
        <div  className={`flex justify-between items-center border rounded  p-4 ${addOns.service ? 'border-purpleBlue' : 'border-magnolia'}`}>
          <div className="flex gap-5 items-center">
             <input onChange={(e)=> handleAddOnsChange('service', e.target.checked, setAddOns)} type="checkbox" name="" id="" className="apperance-none accent-purpleBlue w-5 h-5"/>
          <div className="flex flex-col gap-1">
            <h4 className="text-base font-bold text-marineBlue">Online service </h4>
            <p className="text-sm font-semibold text-coolGray">Access to multiplayer games </p>
          </div>
          </div>
          {date === 'month' && <p className="text-base text-purpleBlue">+12/mo</p>}
          {date === 'year' && <p className="text-base text-purpleBlue">+$10/yr</p>}
        </div>

        <div className={`flex justify-between items-center border rounded  p-4 ${addOns.storage ? 'border-purpleBlue' : 'border-magnolia'}`}>
          <div className="flex gap-5 items-center">
             <input onChange={(e)=> handleAddOnsChange('storage', e.target.checked, setAddOns)} type="checkbox" name="" id="" className="apperance-none accent-purpleBlue w-5 h-5"/>
          <div className="flex flex-col gap-1">
            <h4 className="text-base font-bold text-marineBlue"> Larger storage </h4>
            <p className="text-sm font-semibold text-coolGray">Extra 1TB of cloud save  </p>
          </div>
          </div>
          {date === 'month' && <p className="text-base text-purpleBlue">+$2/mo</p>}
          {date === 'year' && <p className="text-base text-purpleBlue">+$20/yr</p>}
        </div>

        <div className={`flex justify-between items-center border rounded  p-4 ${addOns.profile ? 'border-purpleBlue' : 'border-magnolia'}`}>
          <div className="flex gap-5 items-center">
             <input onChange={(e)=> handleAddOnsChange('profile', e.target.checked, setAddOns)} type="checkbox" name="" id="" className="apperance-none accent-purpleBlue w-5 h-5"/>
          <div className="flex flex-col gap-1">
            <h4 className="text-base font-bold text-marineBlue">Customizable Profile   </h4>
            <p className="text-sm font-semibold text-coolGray">Custom theme on your profile</p>
          </div>
          </div>
          {date === 'month' && <p className="text-base text-purpleBlue">+$2/mo</p>}
          {date === 'year' && <p className="text-base text-purpleBlue">+$20/yr</p>}
        </div>

      </div>

      
    </div>
    <Navigation setPageNumber={setPageNumber} pageNumber={pageNumber}
     nameValidation={nameValidation} phoneValidation={phoneValidation}
      emailValidation={emailValidation} setIsConfirm={setIsConfirm}/>
    </div>
  )
}

export default AddOn