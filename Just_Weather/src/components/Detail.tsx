import sunrise from '../assets/sunrise-icon.svg'
import sunset from '../assets/sunset-icon.svg'
import temperature from '../assets/temperature-icon.svg'
import pressure from '../assets/pressure-icon.svg'
import rain from '../assets/drop-icon.svg'
import wind from '../assets/wind-icon.svg'
import visiblity from '../assets/visibility-icon.svg'
import sun from '../assets/sun-icon.svg'

type DetailProps = {
  position : number, 
  name: string,
  value : string
}

function Detail({position, name, value}: DetailProps) {
  return (
    <div className='bg-slate-100 flex justify-between items-center gap-3 p-4 rounded-md'>
      <div className='flex flex-col gap-2'>
        <p className='text-slate-600 text-base capitalize'>{name}</p>
        <p className='text-slate-800 text-xl font-medium'>
  {value} {position === 3 ? '%' :
          position === 4 ? 'mb' :
          position === 5 ? 'km/h' :
          position === 6 ? 'of 10' :
          position === 7 ? String.fromCharCode(176) :  // Using char code for the degree symbol
          position === 8 ? 'km' : ''}
</p>

      </div>
      <div>
        <img src={position === 1 ? sunrise :
          position === 2 ? sunset :
          position === 3 ? rain : 
          position === 4 ? pressure :
          position === 5 ? wind :
          position === 6 ? sun :
          position === 7 ? temperature :
          visiblity
        } alt="" />
      </div>
    </div>
  )
}

export default Detail