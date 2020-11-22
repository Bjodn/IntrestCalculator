import {colorPalette} from "./ColorPalette.js";
import {widthOfDomElementIsLessThan, mergeStyles} from "../DomUtilities.js";

const lightBlue = colorPalette.lightBlue;
const limeGreen = colorPalette.limeGreen;
const lightGray = colorPalette.lightGray;
const backgroundColor = colorPalette.backgroundColor;

export const containerStyle = () => {
    const style = {"margin": "0 auto", "width": "50%", "padding-bottom": "1em"};

    if (widthOfDomElementIsLessThan(window, 400)) {
        style.width = "100%";
    } else if (widthOfDomElementIsLessThan(window, 540)) {
        style.width = "90%";
    } else if (widthOfDomElementIsLessThan(window, 815)) {
        style.width = "75%";
    }

    return style;
};

const optionStyle = () => {
    const style = {
        background: "none",
        border: "none",
        "margin-top": "1em",
        padding: "1em",
        width: "15em",
        color: lightGray,
        "background-color": backgroundColor,
        "border-bottom-style": "solid"
    };

    if (widthOfDomElementIsLessThan(window, 550)) {
        style.width = "100%";
    }
    return style;
};

export const chosenOptionStyle = () => {
    const style = {
        "border-bottom-color": limeGreen
    };
    return mergeStyles(optionStyle(), style);
};

export const unchosenOptionStyle = () => {
    const style = {
        "border-bottom-color": lightBlue
    };
    return mergeStyles(optionStyle(), style);
};