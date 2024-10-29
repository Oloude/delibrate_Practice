import manageImg from '../assets/images/illustration-multiple-platforms.webp'

function Manage() {
  return (
    <div className='p-6 rounded-xl bg-white lg:row-start-2 lg:row-span-2 lg:col-start-2'>
        <div className='shadow-sm rounded-full mb-4'>
            <img src={manageImg} alt="" />
        </div>
        <h3 className='text-2xl font-semibold text-black'> Manage multiple accounts and platforms.</h3>
    </div>
  )
}

export default Manage