import {colorPalette} from "./ColorPalette.js";
import {widthOfDomElementIsLessThan} from "../DomUtilities.js";

const lightBlue = colorPalette.lightBlue;
const limeGreen = colorPalette.limeGreen;
const lightGray = colorPalette.lightGray;
const backgroundColor = colorPalette.backgroundColor;

export const formStyle = {
    flex: "1",
    display: "flex",
    "flex-wrap": "wrap",
    padding: "1em",
    width: "50%",
    color: lightGray,
    "background-color": backgroundColor
};

export const inputStyle = () => {
    const style = {
        "box-sizing": "border-box",
        "margin-top": "0.2em",
        "margin-bottom": "0.3em",
        width: "80%",
        height: "2em",
        "background-color": backgroundColor,
        color: lightGray,
        "border-style": "none",
        "border-bottom-style": "solid",
        "border-bottom-color": lightBlue
    };
    if (widthOfDomElementIsLessThan(window, 550)) {
        style.width = "100%";
    }
    return style;
};

export const formButtonStyle = () => {
    const style = {
        background: "none",
        border: "none",
        "margin-top": "2em",
        padding: "0.5em",
        color: backgroundColor,
        "background-color": limeGreen,
        width: "25%",
        "min-width": "5em"
    };
    if(widthOfDomElementIsLessThan(window, 550)) {
        style.width = "50%";
    }
    return style;
};

export const inputWrapperStyle = () => {
    const style = {
        width: ""
    };
    if (widthOfDomElementIsLessThan(window, 550)) {
        style.width = "100%";
    }
    return style;
};