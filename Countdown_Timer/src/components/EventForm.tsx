import { useState } from "react"
import { getEvent, EventType } from "../utils"


type EventFormProps = {
    setEvents : React.Dispatch<React.SetStateAction<[] | EventType[]>>,
     setError : React.Dispatch<React.SetStateAction<[] | EventType[]>>,
     error : EventType[] |[],
     closeModal : ()=>void
}

function EventForm({setEvents, setError, error, closeModal}: EventFormProps) {
    const [eventDate,setEventDate] = useState('')
    const [eventName,setEventName] = useState('')
    const [eventTime ,setEventTime] = useState('')

    function handleNameChange(value:string){
      setEventName(value)
    }

    function handleDateChange(value:string){
        setEventDate(value)
      }

      function handleTimeChange(value:string){
        setEventTime(value)
      }

      let eventname = (error.length > 0 && error[0]) ? error[0]['event-name'] : ''
      let eventdate = (error.length > 0 && error[1]) ? error[1]['event-date'] :  ''
      let eventtime = (error.length > 0 && error[2]) ? error[2]['event-time'] : '';


    
    

  return (
    <div className="flex flex-col gap-3 w-full ">
        <h3 className="text-3xl text-center font-bold text-emerald-700 mb-6">Event Details</h3>
        <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-base text-emerald-400 font-medium">Event Name:</label>
            <input onChange={(e)=>handleNameChange(e.target.value)} value={eventName} type="text" className="bg-inherit outline-none border border-emerald-300 rounded-lg p-3 text-emerald-300"/>
           <span className="text-red-600 text-sm font-semibold">{eventname}</span> 
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-base text-emerald-400 font-medium">Event Date:</label>
            <input onChange={(e)=>handleDateChange(e.target.value)} value={eventDate} type="date" className="bg-inherit outline-none border border-emerald-300 rounded-lg p-3 text-emerald-300"/>
            <span className="text-red-600 text-sm font-semibold">{eventdate}</span> 
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-base text-emerald-400 font-medium">Event Time(optional):</label>
            <input onChange={(e)=>handleTimeChange(e.target.value)} value={eventTime} type="text" className="bg-inherit outline-none border border-emerald-300 rounded-lg p-3 text-emerald-300" placeholder="0-23"/>
            <span className="text-red-600 text-sm font-semibold">{eventtime}</span>
        </div>
        <button onClick={()=>getEvent(setEvents, setError, eventName, eventDate, closeModal, eventTime)} className="bg-emerald-900 text-emerald-300 font-bold py-3 px-16 rounded-full self-center hover:bg-inherit hover:border hover:border-emerald-300 hover:text-emerald-700">Start</button>
    </div>
  )
}

export default EventForm