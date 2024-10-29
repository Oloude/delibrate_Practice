import writeImg from '../assets/images/illustration-ai-content.webp'

function Write() {
  return (
    <div className='bg-yellowT p-6 rounded-xl flex flex-col gap-5 lg:row-start-3 lg:row-span-2'>
        <h3 className='text-black font-semibold text-3xl'> Write your content using AI.</h3>
        <div><img src={writeImg} alt="" /></div>
    </div>
  )
}

export default Write