import growImg from '../assets/images/illustration-grow-followers.webp'

function Grow() {
  return (
    <div className='bg-purpleT p-6 rounded-xl flex flex-col gap-4 lg:flex-row lg:col-span-2 lg:row-start-4 lg:col-start-3 '>
       
        <div><img src={growImg} alt="" /></div>
        <h3 className='text-white text-4xl font-medium text-center lg:self-end'>Grow followers with non-stop content.</h3>
    </div>
  )
}

export default Grow