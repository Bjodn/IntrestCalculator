import {calculateInterest} from "../services/calculator.js";
import {DomElement, elementById, clearChildren} from "./DomUtilities.js";

const inputTypes = ["Rate", "Sum", "Years", "Appending value"];

export function renderInterestCalculator() {

    const calculatorInputDiv = new DomElement("div")
                                .withId("CalculatorInput")
                                .withChildren(inputTypes.map(createInputField))
                                .withChild(createButton())
                                .withStyle({"flex": "0 0 30%"})
                                .build();

    const calculatorOutputDiv = new DomElement("div")
        .withId("CalculatorOutput")
        .withStyle({"flex": "1"})
        .build();

    return new DomElement("div")
                .withChildren([calculatorInputDiv, calculatorOutputDiv])
                .withStyle({"display": "flex", "margin-top": "1em"})
                .build();
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

function createButton() {
    return new DomElement("button")
        .withId("CalculateButton")
        .withType("button")
        .withName("button")
        .withInnerHtml("Calculate rate")
        .withOnClick(initiateInterestCalculation)
        .withStyle({"margin-top": "1em", "padding": "0.5em"})
        .build()
}

async function initiateInterestCalculation() {

    const input = createCalculatorInput();
    console.log(input);
    const result = await calculateInterest(input);

    const outputDiv = elementById("CalculatorOutput");
    clearChildren(outputDiv);

    let iteration = 1;

    result.forEach(sum => {
        outputDiv.appendChild(
            new DomElement("p").withInnerHtml(`${iteration}: ${sum}`).build()
        );
        iteration++;
    })
}

function createCalculatorInput() {
    const input = {};
    inputTypes.forEach(inputType => Object.assign(input, {[inputType]: elementById(inputType).value}));
    return input;
}
