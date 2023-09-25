import React, { useState, useEffect } from 'react';
import '../Assets/css/DateTimeDisplay.css'; // Import your CSS file

function DateTimeDisplay() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update the date and time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  const formattedDateTime = currentDateTime.toLocaleDateString(undefined, options);

  return (
    <div className="datetime-container">
      {/* <h1 className="datetime-heading">Current Day, Date, and Time</h1> */}
      <p className="datetime-text">{formattedDateTime}</p>
    </div>
  );
}

export default DateTimeDisplay;
