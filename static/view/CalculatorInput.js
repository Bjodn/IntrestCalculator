import {DomElement} from "./DomUtilities.js";

export class CalculatorInput {

    constructor(inputTypes, button) {
        this.domElement = new DomElement("div")
                            .withId("CalculatorInput")
                            .withChildren(inputTypes.map(createInputField))
                            .withChild(button)
                            .withStyle({"flex": "0 0 30%"})
                            .build();
    }
}

function createInputField(input) {
    const inputText = new DomElement("div")
        .withInnerHtml(input + ": ")
        .withStyle({"margin-top": "1em"})
        .build();

    const inputElement = new DomElement("input")
        .withId(input)
        .build();

    return new DomElement("div")
        .withChildren([inputText, inputElement])
        .build();
}