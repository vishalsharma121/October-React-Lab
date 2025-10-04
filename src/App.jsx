import { useState } from "react";
import Skills from "./components/Skills";
import RadioDropdown from "./components/RadioDropdown";
import LoopMap from "./components/LoopMap";
import ClockColor from "./components/clock/ClockColor";

function App() {
  return (
    <>
      <ClockColor />
      <hr />

      <Skills />
      <hr />

      <RadioDropdown />
      <hr />

      <LoopMap />
    </>
  );
}

export default App;
