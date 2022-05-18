import styled from "styled-components";

import UnitConverter from "./components/UnitConverter";

function App() {
  return (
    <CenteredContainer>
      <StyledApp>
        <Title>Celsius &#8660; Fahrenheit Converter</Title>
        <UnitConverter />
      </StyledApp>
    </CenteredContainer>
  );
}

export default App;

//Styles
const CenteredContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;
  padding: 1rem;
`;

const StyledApp = styled.section`
  --color: rgb(130, 180, 205);
  --radius: 0.4rem;
  --padding: 1rem;

  border-radius: var(--radius, 0.4rem);
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: var(--padding, 1rem);
  font-size: 2.1rem;
  overflow: hidden; //Crop the header corners
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: white;
  background-color: var(--color);
  padding: var(--padding, 1rem);
  //Invert to cover the padding
  margin-top: calc(var(--padding, 0.4rem) * -1);
  margin-left: calc(var(--padding, 0.4rem) * -1);
  margin-right: calc(var(--padding, 0.4rem) * -1);
  display: block;
`;
