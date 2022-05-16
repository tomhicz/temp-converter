import { useState } from "react";

import "./App.css";

function App() {
  //State
  //Always change these using handleChange functions to keep in sync
  const [tempF, setTempF] = useState(75);
  const [tempC, setTempC] = useState(25);

  const maxAccuracy = 2;

  function roundMaxPlaces(num, places) {
    //Round to the max number of decimal places, but only if needed
    const p = Math.pow(10, places);
    return Math.round(num * p) / p;
  }

  //Handlers
  function handleChangeF(e) {
    setTempF(e.target.value);
    setTempC(roundMaxPlaces((e.target.value - 32) / 1.8, maxAccuracy));
  }
  function handleChangeC(e) {
    setTempC(e.target.value);
    setTempF(roundMaxPlaces(e.target.value * 1.8 + 32, maxAccuracy));
  }

  return (
    <div className="App">
      F<input value={tempF} onChange={(e) => handleChangeF(e)} />
      <br />
      C<input value={tempC} onChange={(e) => handleChangeC(e)} />
      <button onClick={() => setTempC(20)}>click</button>
      <br />
      <span>
        {tempF}F, {tempC}C
      </span>
    </div>
  );
}

export default App;
