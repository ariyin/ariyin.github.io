import React, { useState, useEffect } from 'react';

function DateTimeDisplay() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const dateOptions = {
    weekday: 'short',
    day: '2-digit',
    month: '2-digit',
  };
  
  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };
  
  const formattedDate = new Intl.DateTimeFormat('en-US', dateOptions).format(dateTime);

  const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(dateTime);
  const modifiedTime = formattedTime.replace(/:/g, '\u00A0');

  const modifiedDateTime = `${formattedDate} \u00A0 ${modifiedTime}`;

  return (
    <p id = "date-time">{modifiedDateTime}</p>
  );
}

export default DateTimeDisplay;
