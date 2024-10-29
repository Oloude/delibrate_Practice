import createImg from '../assets/images/illustration-create-post.webp'

function Create() {
  return (
    <div className='bg-yellowF p-6 rounded-xl flex flex-col gap-5 justify-center lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:col-end-2'>
        <h3 className='text-3xl font-semibold text-black'>Create and schedule content  <span className='text-purpleT'>quicker</span>.</h3>
        <div>
            <img src={createImg} alt="" />
        </div>
    </div>
  )
}

export default Create