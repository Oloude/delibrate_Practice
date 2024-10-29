import checkIcon from '../assets/icon-checkmark.svg'

function Thanks() {
  return (
    <div className='flex flex-col gap-4 items-center bg-white rounded-lg px-6 py-9 mx-9 shadow-lg -mt-32 lg:mt-0 lg:basis-2/3 lg:justify-center  lg:shadow-none'>
      <div className='bg-strawberryRed w-16 h-16 rounded-full flex justify-center items-center'><img className='w-6 h-6' src={checkIcon} alt="" /></div>
      <h2 className='text-marineBlue text-3xl font-bold text-center'>Thank you!</h2>
      <p className='text-coolGray font-medium text-base text-center'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default Thanks