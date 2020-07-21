import {DomElement} from "./DomUtilities.js";
import {formStyle, inputStyle, inputWrapperStyle} from "./style/FormStyle.js";

export class CalculatorInput {

    constructor(inputTypes, button) {
        this.formElement = new DomElement("div")
                            .withChildren(inputTypes.map(createInputField))
                            .withChild(buttonWrapper(button))
                            .withStyle(formStyle)
                            .build();

        this.toggleElement = new DomElement("div")
            .withStyle({flex: "0 0 5%", padding: "1em"})
            .build();

        this.domElement = new DomElement("div")
            .withId("CalculatorInput")
            .withChildren([
                //this.toggleElement,
                this.formElement])
            .withStyle({display: "flex"})
            .build()
    }
}

function buttonWrapper(button) {
    return new DomElement("div").withStyle({width: "100%"}).withChild(button).build();
}

function createInputField(input) {
    const inputText = new DomElement("div")
        .withClassName("InputText")
        .withInnerHtml(input + ": ")
        .build();

    const inputElement = new DomElement("input")
        .withId(input)
        .withResponsiveStyle(inputStyle)
        .withValue(setDefaultValue(input))
        .build();

    return new DomElement("div")
        .withClassName("InputWrapper")
        .withChildren([inputText, inputElement])
        .withResponsiveStyle(inputWrapperStyle)
        .build();
}

//TODO
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