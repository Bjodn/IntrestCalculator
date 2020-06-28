import {calculateInterest} from "./calculator.js";
import {DomElement, elementById} from "./DomUtilities.js";

export function renderInterestCalculator() {
    const inputDiv = new DomElement("div")
                        .withChildren(createInputFields(["Rate", "Sum", "Years", "Appending value"]))
                        .build();

    const button = new DomElement("button")
                        .withId("CalculateButton")
                        .withType("button")
                        .withName("button")
                        .withInnerHtml("Calculate rate")
                        .withOnClick(calculateInterest)
                        .build();

    const resultDiv = new DomElement("div").withId("Result").build();

    const calculatorDiv = elementById("InterestCalculator");
    calculatorDiv.appendChild(inputDiv);
    calculatorDiv.appendChild(button);
    calculatorDiv.appendChild(resultDiv);
}

function createInputFields(inputs) {
    return inputs.map(createInputField)
}

function createInputField(input) {

    const inputText = new DomElement("p")
                        .withInnerHtml(input + ": ")
                        .build();

    const inputElement = new DomElement("input")
                            .withId(input + "Id")
                            .build();

    return new DomElement("div")
                .withChildren([inputText, inputElement])
                .build();
}