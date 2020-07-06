import {colorPalette} from "./ColorPalette.js";

const lightBlue = colorPalette.lightBlue;
const limeGreen = colorPalette.limeGreen;
const lightGray = colorPalette.lightGray;
const backgroundColor = colorPalette.backgroundColor;

export const formStyle = {
    flex: "0 0 30%",
    margin: "0 auto",
    padding: "1em",
    width: "50%",
    color: lightGray,
    "background-color": backgroundColor
};

export const inputStyle = {
    "margin-top": "0.2em",
    "margin-bottom": "0.3em",
    height: "2em",
    "background-color": backgroundColor,
    color: lightGray,
    "border-style": "none",
    "border-bottom-style": "solid",
    "border-bottom-color": lightBlue
};

export const formButtonStyle = {
    background: "none",
    border: "none",
    "margin-top": "1em", "padding": "0.5em",
    color: backgroundColor,
    "background-color": limeGreen
};