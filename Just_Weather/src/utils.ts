import axios from "axios"

const fetchData = async ()=>{
let response = await axios.get('https://api.weatherapi.com/v1/forecast.json?key=b729a5751aef4fdbaaf90340240210&q=London&days=1&aqi=no&alerts=no&units=f')
return response.data
}

function formatTime(time:string){
  let arr =  time.split(' ')

    return arr[1]
}

function handleUnit(setUnit:React.Dispatch<React.SetStateAction<string>>){
setUnit(prev => prev === 'f' ? 'c' : 'f')
}


export {fetchData, formatTime, handleUnit}