import { useState } from "react";
import styled from "styled-components";

function UnitConverter() {
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
    if (!isNaN(e.target.value)) {
      setTempC(roundMaxPlaces((e.target.value - 32) / 1.8, maxAccuracy));
    } else {
      setTempC("");
    }
  }
  function handleChangeC(e) {
    setTempC(e.target.value);
    if (!isNaN(e.target.value)) {
      setTempF(roundMaxPlaces(e.target.value * 1.8 + 32, maxAccuracy));
    } else {
      setTempF("");
    }
  }

  return (
    <Container>
      <ResponsiveRow>
        <StyledInput>
          <input
            value={tempF}
            onChange={(e) => handleChangeF(e)}
            aria-label="Enter temp in Fahrenheit"
            inputmode="decimal"
          />
          &deg;F
        </StyledInput>
        <ResponsiveArrow></ResponsiveArrow>
        <StyledInput>
          <input
            value={tempC}
            onChange={(e) => handleChangeC(e)}
            aria-label="Enter temp in Celsius"
            inputmode="numeric"
          />
          &deg;C
        </StyledInput>
      </ResponsiveRow>
      <div className="ConversionDetails">
        {tempF}&deg;F is equal to {tempC}&deg;C
      </div>
    </Container>
  );
}

export default UnitConverter;

//Styles

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;

  .ConversionDetails {
    color: slategrey;
    margin-top: 1rem;
  }
`;

const ResponsiveRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  gap: 1rem;

  @media (max-width: 320px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ResponsiveArrow = styled.div`
  &:after {
    //Horizontal Double Arrow
    content: "\\21D4";
  }

  @media (max-width: 320px) {
    &:after {
      //Vertical Double Arrow
      content: "\\21D5";
    }
  }
`;

const StyledInput = styled.div`
  //Target direct child input boxes
  > input {
    //flex-direction: column;
    padding: 0.5rem;
    max-width: 8rem;

    //Gradient borders
    border: double 3px transparent;
    border-radius: 6px;
    background-image: linear-gradient(white, white),
      linear-gradient(to right, orange, yellow);
    background-origin: border-box;
    background-clip: padding-box, border-box;

    transition: opacity 1s;
    opacity: 50%;

    font-size: 2rem;
    text-align: center;
  }

  //Change the style on hover
  > input:focus {
    outline: none !important; //Overide black outline on focus
    background-image: linear-gradient(white, white),
      linear-gradient(to right, red, orange);
    opacity: 100%;
  }
`;
