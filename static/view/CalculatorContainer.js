import {DomElement, widthOfDomElementIsLessThan} from "./DomUtilities.js";

export class CalculatorContainer {

    constructor() {
        this.domElement = new DomElement("div")
            .withId("CalculatorContainer")
            .withResponsiveStyle(calculatorContainerStyle)
            .build();
    }

}

function calculatorContainerStyle() {
    const style = {
        margin: "0 auto",
        width: "50%"
    };
    if (widthOfDomElementIsLessThan(window, 800)) {
        style.width = "100%";
    }
    return style;
}