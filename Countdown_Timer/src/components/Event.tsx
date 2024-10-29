import { EventType } from "../utils";
  import { useState, useEffect } from "react";
  import { getTimer, handleDelete } from "../utils";
  import Timer from "./Timer";
  
  type EventProps = {
    event: {
      'event-name': string;
      'event-date': string;
      'event-time': string;
    },
    setEvents :  React.Dispatch<React.SetStateAction<[] | EventType[]>>
  };
  
  function Event({ event, setEvents }: EventProps) {
    const eventName = event['event-name'];
    const eventDate = event['event-date'];
    const eventTime = event['event-time'];
    const ranges = ["days", "hours", "minutes", "seconds"];
    const [timeLeft, setTimeLeft] = useState(getTimer(eventDate, eventTime));
  
    // useEffect to handle countdown
    useEffect(() => {
      const timerInterval = setInterval(() => {
        setTimeLeft(getTimer(eventDate, eventTime));
      }, 1000); // Update every second
  
      // Cleanup the interval when the component unmounts
      return () => clearInterval(timerInterval);
    }, [eventDate]);
  
    return (
      <div className="bg-emerald-50 bg-opacity-60 p-6 flex flex-col justify-center items-center mb-5">
        <div className="flex flex-col gap-2 mb-10">
          <h4 className="text-2xl font-bold text-emerald-950 text-center capitalize">
            {eventName}
          </h4>
          <h6 className="text-base font-bold text-emerald-700 text-center">
            {eventDate}
          </h6>
        </div>
        <div className="flex gap-3 flex-wrap mb-10">
          {timeLeft.map((time: string, idx: number) => (
            <Timer key={ranges[idx]} timerange={time} range={ranges[idx]} />
          ))}
        </div>
        <button onClick={()=>handleDelete(setEvents, event)} className="bg-emerald-300 text-emerald-950 py-3 px-10 rounded-lg font-bold text-base">
          Delete
        </button>
      </div>
    );
  }
  
  export default Event;
  