import percentImg from '../assets/images/illustration-audience-growth.webp'

function Percent() {
  return (
    <div className='bg-white p-6 rounded-xl flex flex-col gap-5 lg:row-start-4 lg:col-start-2'>
        <h2 className='text-4xl font-bold text-black'>{'>'}56%</h2>
        <p className='text-lg font-medium text-black'>faster audience growth</p>
        <div><img src={percentImg} alt="" /></div>
    </div>
  )
}

export default Percent