import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  textColor: "#eee",
  secondaryTextColor: "rgb(162, 188, 204)",
  headingColor: "#eee",
  headingBg: "rgb(50, 50, 50)",
  gradientColor: "linear-gradient(to right, #1D2671, #C33764)",
  appBg: "#1E1E1E",
  inputBg:
    "linear-gradient(#1E1E1E, #1E1E1E),  linear-gradient(to right, orange, yellow)",
  inputBgFocus:
    "linear-gradient(#1E1E1E, #1E1E1E),  linear-gradient(to right, red, orange);",
};

export const lightTheme = {
  textColor: "#000",
  secondaryTextColor: "rgb(112, 128, 144)",
  headingColor: "white",
  headingBg: "rgb(130, 180, 205)",
  gradientColor: "linear-gradient(to right, #80ffdb, #5390d9)",
  appBg: "rgb(255, 255, 255)",
  inputBg:
    "linear-gradient(white, white),  linear-gradient(to right, orange, yellow)",
  inputBgFocus:
    "linear-gradient(white, white),  linear-gradient(to right, red, orange);",
};

export const GlobalStyles = createGlobalStyle`
 body {
  background: ${(props) => props.theme.gradientColor};
  color: ${(props) => props.theme.textColor};
  transition: .3s ease;
 }
`;
