import {DomElement, clearChildren, elementById} from "./DomUtilities.js";

export function renderCalculatorSwitch(calculators) {

    const calculatorElements = calculators.map(createCalculatorOption);

    return new DomElement("div")
        .withId("calculatorSwitch")
        .withChildren(calculatorElements)
        .build();
}

function createCalculatorOption(calculator) {
    return new DomElement("Button")
        .withOnClick(() => renderCalculator(calculator.renderMethod))
        .withInnerHtml(calculator.name)
        .build()
}

function renderCalculator(renderMethod) {
    const calculatorContainer = elementById("CalculatorContainer");
    clearChildren(calculatorContainer);
    calculatorContainer.appendChild(renderMethod())
}