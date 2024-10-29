function getEvent(
  setEvents: React.Dispatch<React.SetStateAction<[] | EventType[]>>,
  setError: React.Dispatch<React.SetStateAction<[] | ErrorType[]>>,
  eventName: string,
  eventDate: string,
  closeModal: () => void,
  eventTime: string | null = null
) {
  // Check if both eventName and eventDate are valid, and if eventTime is provided, it must be valid too
  if (eventName.trim() && eventDate && (!eventTime || (!isNaN(Number(eventTime)) && parseInt(eventTime) >= 0 && parseInt(eventTime) <= 23))) {
    // If all validations pass, add the event
    setEvents((prev) => {
      let event = {
        'event-name': eventName,
        'event-date': eventDate,
        'event-time': eventTime,
      };
      return [...prev, event];
    });
    setError([]); // Clear errors
    closeModal();
  } else {
    let errors: ErrorType[] = [{}, {}, {}]; 

    // Check for empty eventName
    if (!eventName.trim()) {
      errors[0] = { 'event-name': 'This input can’t be empty' };
    }

    // Check for empty eventDate
    if (!eventDate) {
      errors[1] = { 'event-date': 'This input can’t be empty' };
    }

    // Check for invalid eventTime
    if (eventTime && (isNaN(Number(eventTime)) || parseInt(eventTime) < 0 || parseInt(eventTime) > 23)) {
      errors[2] = { 'event-time': 'Time should be a number between 0 and 23' };
    }

    setError(errors); // Set errors accordingly
  }
}






function getTimer(date: string, time: string | null = null) {
  let then;

  // If time is provided, construct date with year, month, day, and time
  if (time) {
    let [year, month, day] = date.split('-').map(Number); // Split date into numeric values
    then = new Date(year, month-1, day, parseInt(time)); // Construct date with time (month is 0-based)
  } else {
    then = new Date(date); // Just the date, no time
  }

  let now = new Date(); // Current date
  

  let diff = then.getTime() - now.getTime(); // Difference in milliseconds

  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }; // Event has passed
  }

  // Convert the time difference from milliseconds
  let seconds = Math.floor((diff / 1000) % 60);
  let minutes = Math.floor((diff / 1000 / 60) % 60);
  let hours = Math.floor((diff / 1000 / 60 / 60) % 24);
  let days = Math.floor(diff / 1000 / 60 / 60 / 24);

  return [days, hours, minutes, seconds];
}


  function handleDelete(setEvents:React.Dispatch<React.SetStateAction<[] | EventType[]>>, event: EventType) {
    setEvents((prevEvents) => {
      // Filter out the event that matches the one passed in
      return prevEvents.filter(
        (e) =>
          e['event-name'] !== event['event-name'] ||
          e['event-date'] !== event['event-date']
      );
    });
  }
  
  
  

  type EventType = {
    'event-name': string;
    'event-date': string;
    'event-time'?: string | null;
  };
  

export {getEvent, getTimer, handleDelete}

export type {EventType}