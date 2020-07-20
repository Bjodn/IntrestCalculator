import {DomElement, elementById, clearChildren} from "../DomUtilities.js";
import {CalculatorOutput} from "../CalculatorOutput.js";
import {CalculatorInput} from "../CalculatorInput.js";
import {formButtonStyle} from "../style/FormStyle.js";

export class Calculator {

    name;
    inputTypes;
    calculation;
    input;
    output;

    renderCalculator() {
        this.input = new CalculatorInput(this.inputTypes, this.createCalculationButton());
        this.output = new CalculatorOutput();

        this.domElement = new DomElement("div")
            .withChildren([this.input.domElement, this.output.domElement])
            .withStyle({"margin-top": "1em"})
            .build();
    }

    createCalculationButton() {
        return new DomElement("button")
            .withId("CalculateButton")
            .withType("button")
            .withName("button")
            .withInnerHtml("Calculate")
            .withOnClick(() => this.initiateCalculationAndPrintResult())
            .withStyle(formButtonStyle)
            .build()
    }

    initiateCalculationAndPrintResult() {
        const input = gatherCalculatorInput(this.inputTypes);
        const result = this.calculation(input);

        clearChildren(this.output.domElement);
        this.output.renderOutput(result, this.tableOutputStyleAdjustment);
    }

    tableOutputStyleAdjustment() {}

}

function gatherCalculatorInput(inputTypes) {
    const input = {};
    inputTypes.forEach(inputType => Object.assign(input, {[inputType]: elementById(inputType).value}));
    return input;
}