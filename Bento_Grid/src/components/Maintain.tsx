import maintainImg from '../assets/images/illustration-consistent-schedule.webp'

function Maintain() {
  return (
    <div className='bg-yellowT px-6 pt-6 rounded-xl flex flex-col items-start overflow-hidden lg:row-start-2 lg:row-span-2 lg:col-start-3'>
        <h3 className='text-2xl font-semibold text-black mb-4 lg:text-3xl' > Maintain a consistent posting schedule. </h3>
        <div className='lg:h-92 '><img className='object-cover' src={maintainImg} alt="" /></div>
    </div>
  )
}

export default Maintain