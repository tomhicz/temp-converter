import { useState } from "react";

import "./App.css";

function App() {
  //State
  const [tempF, setTempF] = useState(75);
  const [tempC, setTempC] = useState(25);

  //Handlers
  function handleChangeF(e) {
    setTempF(e.target.value);
    setTempC((e.target.value - 32) / 1.8);
  }
  function handleChangeC(e) {
    setTempC(e.target.value);
    setTempF(e.target.value * 1.8 + 32);
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
