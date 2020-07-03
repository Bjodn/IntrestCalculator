import {calculateInterest} from "../services/calculator.js";
import {DomElement, elementById, clearChildren} from "./DomUtilities.js";

export function renderInterestCalculator() {
    const inputDiv = new DomElement("div")
                        .withChildren(createInputFields(["Rate", "Sum", "Years", "Appending value"]))
                        .build();

    const button = new DomElement("button")
                        .withId("CalculateButton")
                        .withType("button")
                        .withName("button")
                        .withInnerHtml("Calculate rate")
                        .withOnClick(initiateInterestCalculation)
                        .build();


    const calculatorInputDiv = new DomElement("div").withId("CalculatorInput").build();
    calculatorInputDiv.appendChild(inputDiv);
    calculatorInputDiv.appendChild(button);

    const calculatorOutputDiv = new DomElement("div").withId("CalculatorOutput").build();

    return new DomElement("div").withChildren([calculatorInputDiv, calculatorOutputDiv]).build();
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

async function initiateInterestCalculation() {

    const result = await calculateInterest();

    const resultContainter = elementById("CalculatorOutput");
    clearChildren(resultContainter);

    let iteration = 1;

    result.forEach(sum => {
        resultContainter.appendChild(
            new DomElement("p").withInnerHtml(`${iteration}: ${sum}`).build()
        );
        iteration++;
    })

}