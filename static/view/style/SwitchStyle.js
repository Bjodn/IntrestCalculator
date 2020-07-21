import {colorPalette} from "./ColorPalette.js";
import {widthOfDomElementIsLessThan} from "../DomUtilities.js";

const lightBlue = colorPalette.lightBlue;
const limeGreen = colorPalette.limeGreen;
const lightGray = colorPalette.lightGray;
const backgroundColor = colorPalette.backgroundColor;

export const containerStyle = () => {
    const style = {"margin": "0 auto", "width": "50%", "padding-bottom": "2.5em"};

    if (widthOfDomElementIsLessThan(window, 400)) {
        style.width = "100%";
    } else if (widthOfDomElementIsLessThan(window, 540)) {
        style.width = "90%";
    } else if (widthOfDomElementIsLessThan(window, 815)) {
        style.width = "75%";
    }

    return style;
};

export const optionStyle = () => {
    const style = {
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

    if (widthOfDomElementIsLessThan(window, 550)) {
        style.width = "100%";
    }
    return style;
};

export const chosenOptionStyle = {
    "border-bottom-color": limeGreen
};

export const unchosenOptionStyle = {
    "border-bottom-color": lightBlue
};