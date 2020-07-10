import {colorPalette} from "./ColorPalette.js";

const lightBlue = colorPalette.lightBlue;
const limeGreen = colorPalette.limeGreen;
const lightGray = colorPalette.lightGray;
const backgroundColor = colorPalette.backgroundColor;

export const cellStyle = {
    padding: "1em",
    width: "10em",
    "border-bottom-style": "solid",
    "border-width": "0.05em",
    "border-color": lightBlue,
    color: lightGray,
    "background-color": backgroundColor,
    margin: "0px"
};

export const profitCellStyle = {
    color: limeGreen,
    "border-left-color": limeGreen,
    "border-left-style": "dashed"
};

export const appendedCellStyle = {
    color: lightBlue,
    "border-left-color": lightBlue,
    "border-left-style": "dashed"
};

export const headerCellStyle =  {
    "border-bottom-width": "0.1em"
};


