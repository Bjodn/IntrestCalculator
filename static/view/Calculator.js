import {DomElement, elementById, clearChildren} from "./DomUtilities.js";
import {CalculatorOutput} from "./CalculatorOutput.js";

export class Calculator {

    constructor(inputTypes, calculation) {
        this.inputTypes = inputTypes;
        this.calculation = calculation;

        this.inputDiv = new DomElement("div")
                            .withId("CalculatorInput")
                            .withChildren(this.inputTypes.map(Calculator.createInputField))
                            .withChild(this.createButton())
                            .withStyle({"flex": "0 0 30%"})
                            .build();

        this.outputDiv = new CalculatorOutput();
    }

    renderCalculator() {
        return new DomElement("div")
                .withChildren([this.inputDiv, this.outputDiv.domElement])
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
            .withOnClick(() => this.initiateCalculationAndPrintResult())
            .withStyle({"margin-top": "1em", "padding": "0.5em"})
            .build()
    }

    initiateCalculationAndPrintResult() {
        const input = this.createCalculatorInput();
        const result = this.calculation(input);

        clearChildren(this.outputDiv.domElement);
        this.outputDiv.renderOutput(result);
    }

    createCalculatorInput() {
        const input = {};
        this.inputTypes.forEach(inputType => Object.assign(input, {[inputType]: elementById(inputType).value}));
        return input;
    }
}
