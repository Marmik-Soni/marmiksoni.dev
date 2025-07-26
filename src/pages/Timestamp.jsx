import { useEffect, useState } from "react";

function TimeStamp() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = now.toLocaleDateString();
  const formattedTime = now.toLocaleTimeString();

  return (
    <div>
      <p>
        <big>Current Date and Time</big>
        <br />
        <strong>Date:</strong> {formattedDate}
        <br />
        <strong>Time:</strong> {formattedTime}
      </p>
    </div>
  );
}

export default TimeStamp;
