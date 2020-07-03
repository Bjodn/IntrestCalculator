import {DomElement, clearChildren, elementById} from "./DomUtilities.js";

export function renderCalculatorSwitch(calculators) {

    const calculatorElements = calculators.map(createCalculatorOption);

    return new DomElement("div")
        .withId("calculatorSwitch")
        .withChildren(calculatorElements)
        .withStyle({"margin": "0 auto", "width": "50%"})
        .build();
}

function createCalculatorOption(calculator) {
    return new DomElement("Button")
        .withOnClick(() => renderCalculator(calculator.class))
        .withInnerHtml(calculator.name)
        .build()
}

function renderCalculator(calculator) {
    const calculatorContainer = elementById("CalculatorContainer");
    clearChildren(calculatorContainer);
    calculatorContainer.appendChild(calculator.renderCalculator())
}