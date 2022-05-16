import styled from "styled-components";

import UnitConverter from "./components/UnitConverter";

function App() {
  return (
    <div className="App">
      <Title>Title here</Title>
      <UnitConverter />
    </div>
  );
}

export default App;

//Styles

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
