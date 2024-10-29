import Navigation from "./Navigation"
import { handlePageNumber, subscriptionPlans, handleSummary } from "../utils"
import { SummaryProps } from "../type"


function Summary( {pageNumber, setPageNumber, plan, date, addOns,
   nameValidation, emailValidation, phoneValidation, setIsConfirm}: SummaryProps) {
  let total = 0
  return (
    <div className='lg:flex flex-col'>
    <div className="bg-white rounded-lg px-6 py-9 mx-9 shadow-lg -mt-32 lg:mt-0 flex flex-col lg:shadow-none">
      <h2 className="text-3xl font-bold text-marineBlue mb-3">Finishing up</h2>
      <p className="text-lg font-medium text-coolGray mb-8"> Double-check everything looks OK before confirming.</p>

      <div className="bg-alabaster p-3 rounded-md mb-5">
        <div className="flex justify-between items-center gap-3 border-b-2 border-magnolia pb-2">
          <div className="flex flex-col ">
            <p className="text-marineBlue font-semibold text-base capitalize">{plan} (monthly)</p>
            <span onClick={()=>handlePageNumber(setPageNumber, 2)} className="text-coolGray text-sm underline">Change</span>
          </div>
          <p className="text-marineBlue text-base font-bold">${subscriptionPlans[plan as keyof typeof subscriptionPlans][date as 'month' | 'year']}{date === 'month' ? '/mo': '/yr'}</p>
        </div>

        <div className="flex flex-col gap-2 pt-5">
           {handleSummary(addOns, date).map(item => {
            total += item.value
           return <div className="flex justify-between items-center">
              <p className="text-coolGray font-medium text-base">{ item.addon === 'service' ? 'Online service' : item.addon === 'storage' ? 'Large storage' : 'Customizable profile' }</p>
              <span className="text-marineBlue font-medium text-base">+${item.value}{date === 'month' ? '/mo': '/yr'}</span>
            </div>
           })}
        </div>

      </div>
      <div className="flex justify-between items-center gap-3">
        <h4 className="text-coolGray text-xs">Total (per {date})</h4>
        <p className="text-purpleBlue font-semibold text-lg">+${total + subscriptionPlans[plan as keyof typeof subscriptionPlans][date as 'month' | 'year']}{date === 'month' ? '/mo': '/yr'}</p>
      </div>
      
    </div>
    <Navigation setPageNumber={setPageNumber} pageNumber={pageNumber}
     nameValidation={nameValidation} phoneValidation={phoneValidation}
      emailValidation={emailValidation} setIsConfirm={setIsConfirm}/>
    </div>
  )
}

export default Summary