import arcade from '../assets/icon-arcade.svg'
import advance from '../assets/icon-advanced.svg'
import pro from '../assets/icon-pro.svg'
import Navigation from './Navigation'
import { handleDateChange, handlePlanChange } from '../utils'
import { PlanProps } from '../type'


function Plan({pageNumber, setPageNumber, setDate, date, plan, setPlan,
  nameValidation, emailValidation, phoneValidation, setIsConfirm
}: PlanProps) {

  function handleClick(){
    if(date === 'month'){
      handleDateChange('year',setDate)
    }else{
      handleDateChange('month',setDate)
    }
  }
  return (
    <div className='lg:flex flex-col'>
    <div className="bg-white rounded-lg px-6 py-9 mx-9 shadow-lg -mt-32 lg:mt-0 flex flex-col lg:shadow-none">
      <h2 className="text-3xl font-bold text-marineBlue mb-3">Select your plan </h2>
      <p className="text-lg font-medium text-coolGray mb-8">
      You have the option of monthly or yearly billing.
      </p>
      <div className='mb-6 grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-4'>
        <div onClick={()=>handlePlanChange('arcade', setPlan)} className={` ${plan ==='arcade' ? 'border-purpleBlue' : 'border-magnolia'} flex gap-3 border  rounded-md p-4  lg:flex-col lg:gap-8`}>
          <div><img src={arcade} alt="" /></div>
          <div className='flex flex-col gap-1'>
            <h4 className='text-lg font-semibold text-marineBlue'>Arcade </h4>
           {date === 'month' && <p className='text-base text-coolGray'>$9/mo</p>}
           {date === 'year' && <p className='text-base text-coolGray'>$90/yr</p>}
            {date === 'year' &&  <p className='text-sm font-medium text-marineBlue'>2 months free</p>}
          </div>
        </div>

        <div onClick={()=>handlePlanChange('advance', setPlan)} className={` ${plan ==='advance' ? 'border-purpleBlue' : 'border-magnolia'} flex gap-3 border  rounded-md p-4  lg:flex-col lg:gap-8`}>
          <div><img src={advance} alt="" /></div>
          <div className='flex flex-col gap-1'>
            <h4 className='text-lg font-semibold text-marineBlue'>Advanced  </h4>
            { date === 'month' && <p className='text-base text-coolGray'>$12/mo</p>}
           {date === 'year' &&  <p className='text-base text-coolGray'>$120/yr</p>}
            {date === 'year' &&  <p className='text-sm font-medium text-marineBlue'>2 months free</p>}
          </div>
        </div>

        <div onClick={()=>handlePlanChange('pro', setPlan)} className={` ${plan ==='pro' ? 'border-purpleBlue' : 'border-magnolia'} flex gap-3 border  rounded-md p-4  lg:flex-col lg:gap-8`}>
          <div><img src={pro} alt="" /></div>
          <div className='flex flex-col gap-1'>
            <h4 className='text-lg font-semibold text-marineBlue'>Pro </h4>
            { date === 'month' && <p className='text-base text-coolGray'>$15/mo</p>}
           {date === 'year' &&  <p className='text-base text-coolGray'>$150/yr</p>}
           {date === 'year' &&  <p className='text-sm font-medium text-marineBlue'>2 months free</p>}
          </div>
        </div>

      </div>

      <div className='bg-alabaster rounded p-4 flex gap-3 justify-center items-center'>
        <p className='text-marineBlue font-medium text-base'>Monthly</p>
        <div className={`w-12 h-6 rounded-full p-1 bg-marineBlue flex ${date === 'month' ? 'justify-start' : 'justify-end'}`}><span onClick={handleClick} className='w-4 h-4 rounded-full bg-white block'></span></div>
        <p className='text-coolGray font-medium text-base'> Yearly</p>
      </div>

     
    </div>
    <Navigation setPageNumber={setPageNumber} pageNumber={pageNumber}
     nameValidation={nameValidation} phoneValidation={phoneValidation}
      emailValidation={emailValidation} setIsConfirm={setIsConfirm}/>
    </div>
  )
}

export default Plan