import {colorPalette} from "./ColorPalette.js";
import {widthOfDomElementIsLessThan} from "../DomUtilities.js";

const lightBlue = colorPalette.lightBlue;
const limeGreen = colorPalette.limeGreen;
const lightGray = colorPalette.lightGray;
const backgroundColor = colorPalette.backgroundColor;

export const cellStyle = () => {
  const style = {
      padding: "1em",
      width: "10em",
      "border-bottom-style": "solid",
      "border-width": "0.05em",
      "border-color": lightBlue,
      color: lightGray,
      "background-color": backgroundColor,
      margin: "0px"
  };
  if(widthOfDomElementIsLessThan(window, 400)) {
      style.padding = "0.4em";
      style.width = "100%";
  }
  return style;
};


export const profitCellStyle = () => {
    const style = cellStyle();
    style.color = limeGreen;
    style["border-left-color"] = limeGreen;
    style["border-left-style"] = "dashed";
    return style;
};

export const appendedCellStyle = () =>{
    const style = cellStyle();
    style.color = lightBlue;
    style["border-left-color"] = lightBlue;
    style["border-left-style"] = "dashed";
    return style;
};

export const sumCellStyle = () => {
    const style = cellStyle();
    style["border-left-color"] = "white";
    style["border-left-style"] = "dashed";
    return style;
};

export const annualCellStyle = () => {
    const style = cellStyle();
    style.width = "1.2em";
    return style;
};

export const headerCellStyle = {
    "border-bottom-width": "0.1em"
};


