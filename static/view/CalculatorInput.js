import {DomElement} from "./DomUtilities.js";
import {formStyle, inputStyle} from "./style/FormStyle.js";

export class CalculatorInput {

    constructor(inputTypes, button) {
        this.domElement = new DomElement("div")
                            .withId("CalculatorInput")
                            .withChildren(inputTypes.map(createInputField))
                            .withChild(button)
                            .withStyle(formStyle)
                            .build();
    }
}

function createInputField(input) {
    const inputText = new DomElement("div")
        .withInnerHtml(input + ": ")
        .build();

    const inputElement = new DomElement("input")
        .withId(input)
        .withStyle(inputStyle)
        .withValue(setDefaultValue(input))
        .build();

    return new DomElement("div")
        .withChildren([inputText, inputElement])
        .build();
}

function setDefaultValue(input) {
    if (input === "Rate") {
        return "8"
    } else if  (input === "Sum") {
        return "100000"
    } else if (input === "Years") {
        return "20"
    } else {
        return ""
    }
}