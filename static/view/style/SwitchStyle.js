import {colorPalette} from "./ColorPalette.js";

const lightBlue = colorPalette.lightBlue;
const limeGreen = colorPalette.limeGreen;
const lightGray = colorPalette.lightGray;
const backgroundColor = colorPalette.backgroundColor;

export const optionStyle = {
    background: "none",
    border: "none",
    "margin-top": "1em",
    padding: "1em",
    width: "15em",
    color: lightGray,
    "background-color": backgroundColor,
    "border-bottom-style": "solid",
    "border-bottom-color": lightBlue
};

export const chosenOptionStyle = {
    "border-bottom-color": limeGreen
};

export const unchosenOptionStyle = {
    "border-bottom-color": lightBlue
};