import { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./theme";

import UnitConverter from "./components/UnitConverter";

function App() {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <CenteredContainer>
        <StyledApp>
          <Title>Celsius &#8660; Fahrenheit Converter</Title>
          <Toggle onClick={switchTheme}></Toggle>
          <UnitConverter />
        </StyledApp>
      </CenteredContainer>
    </ThemeProvider>
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
  --radius: 0.4rem;
  --padding: 1rem;

  border-radius: var(--radius, 0.4rem);
  background-color: ${(props) => props.theme.appBg};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: var(--padding, 1rem);
  font-size: 2.1rem;
  overflow: hidden; //Crop the header corners
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: ${(props) => props.theme.headingColor};
  background-color: ${(props) => props.theme.headingBg};
  padding: var(--padding, 1rem);
  //Invert to cover the padding
  margin-top: calc(var(--padding, 0.4rem) * -1);
  margin-left: calc(var(--padding, 0.4rem) * -1);
  margin-right: calc(var(--padding, 0.4rem) * -1);
  display: block;
`;

const Toggle = styled.button`
  --size: 2.8rem;
  border: 1px solid ${(props) => props.theme.appBg};
  outline: none;
  font-size: 2rem;
  cursor: pointer;
  transition: 0.5s all ease-in-out;
  background-color: ${(props) => props.theme.textColor};
  box-shadow: 5px 0px 0px 0px ${(props) => props.theme.appBg};
  border-radius: var(--size);
  width: var(--size);
  height: var(--size);
  position: absolute;
  top: 8px;
  right: 13px;
  &:hover {
    transition: 0.5s all ease-in-out;
    border: none;
  }
`;
