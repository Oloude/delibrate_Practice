type CityProps = {
  name:string, 
  maxF: string,
  maxC: string,
  minF: string,
  minC: string,
  unit: string,
  img: string
}

function City({name,maxF,maxC,minF,minC,unit, img}: CityProps) {
  return (
    <div className="flex  gap-3 mb-16">
      
       <div className="flex flex-col gap-2">
       <h1 className="text-slate-900 text-3xl font-medium">{name}</h1>
        <div className="flex">
        <p className="text-slate-800 text-5xl font-medium">{unit === 'f' ? maxF : maxC}&deg;-</p>
        <p className="text-slate-500 text-5xl font-medium">{unit === 'f' ? minF : minC}&deg;</p>
        </div>
        
       </div>
       <div className="self-end"><img className="w-full h-full object-contain" src={img} alt="" /></div>
    </div>
  )
}

export default City