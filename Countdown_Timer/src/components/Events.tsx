import { useEffect, useState } from "react"
import EventForm from "./EventForm"
import Modal from 'react-modal'
import { EventType } from "../utils";
import Event from "./Event";


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '70%',
      maxWidth: '700px',
      backgroundColor : '#ecfdf5'
    },
    overlay : {
        backgroundColor: 'rgba(0, 0, 0, .5)',
      
    }
  };

  Modal.setAppElement('#root');

function Events() {

  const [events, setEvents] = useState<EventType[] | []>(()=>{
    let events = localStorage.getItem('eventsTimer')
    return events ? JSON.parse(events) : []
  })
  const [error,setError] = useState<EventType[] | []>([])
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(()=>{
    localStorage.setItem('eventsTimer', JSON.stringify(events))
  }, [events])

 
  return (
    <section className="max-w-3xl mx-auto flex flex-col">
        <h1 className="text-3xl text-center font-bold text-emerald-200 mb-10">Event Countdown Timer</h1>
        <button onClick={openModal} className="bg-emerald-200 text-emerald-950 font-semibold text-lg p-3 rounded-lg self-center mb-12">Add Event</button>
       <Modal isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}>
          <EventForm setError={setError} setEvents={setEvents} error={error} closeModal={closeModal}/>
       </Modal>

      {events.length ===0 && <div className="bg-emerald-50 h-32 bg-opacity-60 text-emerald-800 text-2xl font-medium p-6 flex justify-center items-center"> <span className="text-emerald-950 font-extrabold ">No Event</span>, click the add event button to add new event</div>}
      {events.map((event, idx)=> <Event key={idx} event={event} setEvents={setEvents} />)} 
    </section>
  )
}

export default Events