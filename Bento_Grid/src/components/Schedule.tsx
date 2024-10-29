import scheduleImg from '../assets/images/illustration-schedule-posts.webp'

function Schedule() {
  return (
    <div className='bg-purple-200 p-6 rounded-xl flex flex-col gap-5 overflow-hidden  lg:justify-center lg:row-span-3 lg:row-start-1 lg:col-start-4'>
        <h3 className='text-2xl font-semibold text-black'>Schedule to social media.</h3>
        <div className='lg:w-96 lg:h-60 '><img className="w-full h-full" src={scheduleImg} alt="" /></div>
        <p className='text-center text-black font-medium text-lg lg:text-left'> Optimize post timings to publish content at the perfect time for your audience.</p>
    </div>
  )
}



export default Schedule