import Header from "./Header"
import { useQuery } from "react-query"
import { fetchData, formatTime } from "../utils"
import City from "./City";
import { useState } from "react";
import HourForcast from "./HourForcast";
import Detail from "./Detail";

function Weather() {
const [unit, setUnit] = useState('f')
  const {data} = useQuery('weatherData', fetchData);
  console.log(data)

  return (
    <section>
      <Header unit={unit} setUnit={setUnit}/>
      {data && <City name={data.location.name}
      maxF={data.forecast.forecastday[0].day.maxtemp_f}
      maxC={data.forecast.forecastday[0].day.maxtemp_c}
      minF={data.forecast.forecastday[0].day.mintemp_f}
      minC={data.forecast.forecastday[0].day.mintemp_c}
      unit={unit}
      img={data.current.condition.icon}/>}
     {data &&  <section className="bg-slate-200 rounded-lg p-5 mb-10">
         <h2 className="text-slate-500 text-base uppercase mb-5">today's forecast</h2>
        <div className="flex gap-3 overflow-x-scroll">{data.forecast.forecastday[0].hour.map(item => <HourForcast key={item.time} time={formatTime(item.time)} unit={unit} 
        tempC={item.temp_c} tempF={item.temp_f} img={item.condition.icon}/>)}</div>
      </section>}
     {data &&  <section className="bg-slate-200 rounded-lg p-5">
      <h2 className="text-slate-500 text-base uppercase mb-5">weather details</h2>
        <div className="grid gap-3 grid-cols-1  grid-rows-8 sm:grid-cols-2 sm:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2">
          <Detail name='sunrise' value={data.forecast.forecastday[0].astro.sunrise} position={1}/>
          <Detail name='sunset' value={data.forecast.forecastday[0].astro.sunset} position={2}/>
          <Detail name='chance of rain' value={data.forecast.forecastday[0].day.daily_chance_of_rain} position={3}/>
          <Detail name='pressure' value={data.current.pressure_mb} position={4}/>
          <Detail name='wind' value={data.current.wind_kph} position={5}/>
          <Detail name='uv index' value={data.current.uv} position={6}/>
          <Detail name='feel like' value={unit === 'f' ? data.current.feelslike_f :data.current.feelslike_c} position={7}/>
          <Detail name='visiblity' value={data.current.vis_km} position={8}/>
        </div>
      </section>}
    </section>
  )
}

export default Weather