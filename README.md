# Responsive Temperature Converter App

## Introduction

This is a small front end application to easily convert temperatures between Fahrenheit and Celsius.
It is built in **React.js** and **Styled Components**. A live version is deployed [here](https://snazzy-licorice-ea29d6.netlify.app/).

---

## Architecture

The app is basically built using only React and Styled Components. As it is a relatively simple front-end app, several frameworks such as React, Vue and Svelte would probably have been equally suitable, but React was selected due to familiarity, flexibility and its large ecosystem.

Vue and Svelte would also have been good options due to their reactivity and data-binding functionality.

The [Create React App](https://create-react-app.dev/) package was used for its speed and convenience in setting up a build environment and basic configuration.

App architecture is relatively simple, with one `App component` which contains a header (that could be expanded into a menu in a more complex app) and a `UnitConverter component` which handles the logic of the temperature conversion.

### Functionality

A numeric temperature can be entered into either the **F** or **C** input box. If it is a valid number (including negative temperatures) it will be 'live converted' in the other input box.

Accuracy is set to 2 decimal places (specified in the `maxAccuracy` constant), but will only display decimal places when needed.

The temperature values are also displayed in text below the input boxes for convenience and to aid screen readers. _Aria labels_ are also included on the input boxes to aid screen readers.

Currently the input boxes are part of the `UnitConverter component`, but it would be reasonable to break them out into their own components if they needed to be used in more places.

---

## UI

The UI is responsive and built using [Styled Components](https://styled-components.com/). This allows the css to be contained in the same file as the logic, Vue style, and also enables locally scoped css and the use of Scss syntax.

Given the simplicity of the app structure, clear but eye-catching colors and gradients were used to make the app more visually interesting.
All styling is currently done with css and no images are used, which makes the app more lightweight and cuts down on loading times.

When an input box is selected, the border color changes to highlight the selection, and the other box slightly fades out.

Additional UI touches include setting the _input boxes to trigger numeric keypads on mobile_ devices, and _selecting the entire input contents_ when the box is selected to enable easier editing on moblie.

The `UnitConvertor component` is _responsive_ and on very narrow screens ( < 320px ) the input boxes will be stacked vertically and the arrow between them will switch to a vertical arrow.

---

## Dark Mode

As **Styled Components** was already being used for styling, the logical solution to implementing a Dark Mode was to use this library and make use of the `ThemeProvider` functionality. Dark and Light themes are stored in `theme.js` and are then toggled using a pure css button in the top right corner of the screen.

Styled Components gives access to theme variables in all nested components, so these are used to set specific themed colors in the css of child components.

The `createGlobalStyle` helper function is used to enable changing the background gradient on the body element.

---

## Instructions

### Installation

Requires Node.js and Npm package manager.

#### `npm i`

Installs the necessary packages to run and build the application.

### Development

#### `npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### Testing

#### `npm test`

Launches the test runner in the interactive watch mode.

2 basic 'smoke tests' are included to check that the App and UnitConverter components are displayed. These can be integrated into the CI pipeline.

### Deployment

#### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.

The build folder can then be deployed as required.

---

## Next Steps

The app has been tested on Chrome and Firefox on Windows, and on Android Tablets and Phones. Additional testing on Apple devices would be useful.

Test whether arrow glyph renders correctly on all platforms and replace with inline svg if necessary.

Breaking out Input components into more generic components.
