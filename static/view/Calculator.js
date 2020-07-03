import {DomElement, elementById, clearChildren} from "./DomUtilities.js";

export class Calculator {
    constructor(inputTypes, calculation) {
        this.inputTypes = inputTypes;
        this.calculation = calculation;
    }

    renderCalculator() {

        const calculatorInputDiv = new DomElement("div")
            .withId("CalculatorInput")
            .withChildren(this.inputTypes.map(Calculator.createInputField))
            .withChild(this.createButton())
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

    static createInputField(input) {
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

    createButton() {
        return new DomElement("button")
            .withId("CalculateButton")
            .withType("button")
            .withName("button")
            .withInnerHtml("Calculate rate")
            .withOnClick(() => this.initiateCalculation())
            .withStyle({"margin-top": "1em", "padding": "0.5em"})
            .build()
    }

    initiateCalculation() {

        const input = this.createCalculatorInput();
        const result = this.calculation(input);

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

    createCalculatorInput() {
        const input = {};
        this.inputTypes.forEach(inputType => Object.assign(input, {[inputType]: elementById(inputType).value}));
        return input;
    }
}
