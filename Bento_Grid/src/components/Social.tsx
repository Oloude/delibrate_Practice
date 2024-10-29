import socialImg from '../assets/images/illustration-five-stars.webp'

function Social() {
  return (
    <div className='bg-purpleT p-6 rounded-xl flex justify-center flex-col items-center lg:col-span-2 '>
        <h2 className='text-center text-5xl font-medium text-white mb-6'>Social Media<span className='text-yellowT'>10x</span> Faster with AI </h2>
    <div className='mb-2 '><img className='w-full h-full' src={socialImg} alt="" /></div>
    <p className='text-yellowF text-lg '>Over 4,000 5-star reviews</p>
    </div>
  )
}
  

export default Social