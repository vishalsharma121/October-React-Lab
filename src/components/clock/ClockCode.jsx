import { useEffect, useState } from "react";

const ClockCode = ({ color }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1
        style={{
          color: color,
          backgroundColor: '#000',
          width: '150px',
          padding: '10px',
          borderRadius: '5px',
          textAlign: 'center'
        }}
      >
        {time}
      </h1>
    </div>
  );
};

export default ClockCode;
