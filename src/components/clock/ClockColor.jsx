import { useState } from "react";
import ClockCode from "./ClockCode"; // ✅ Correct component name

function ClockColor() {
  const [color, setColor] = useState('green');

  return (
    <div>
      <h1>Digital Clock in React JS</h1>

      <select onChange={(event) => setColor(event.target.value)}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="orange">Orange</option>
      </select>

      <ClockCode color={color} /> {/* ✅ Use correct component */}
    </div>
  );
}

export default ClockColor;
