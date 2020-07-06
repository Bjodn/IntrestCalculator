import {DomElement, clearChildren, elementById} from "./DomUtilities.js";
import {optionStyle, chosenOptionStyle, unchosenOptionStyle} from "./style/SwitchStyle.js";
import {adjustStylingOfElement} from "./DomUtilities.js";

export class CalculatorSwitch {

    constructor(calculators) {

        this.options = calculators.map(calculator => this.createCalculatorOption(calculator));

        this.domElement = new DomElement("div")
            .withId("calculatorSwitch")
            .withChildren(this.options)
            .withStyle({"margin": "0 auto", "width": "50%"})
            .build();
    }

    createCalculatorOption(calculator) {
        return new DomElement("Button")
            .withOnClick(
                () => renderCalculator(calculator.class),
                chosenOption => this.activateOption(chosenOption)
            )
            .withInnerHtml(calculator.name)
            .withStyle(optionStyle)
            .build()
    }

    activateOption(chosenOption) {
        this.options.forEach(option => adjustStylingOfElement(option, unchosenOptionStyle));
        adjustStylingOfElement(chosenOption, chosenOptionStyle);
    }
}

function renderCalculator(calculator) {
    const calculatorContainer = elementById("CalculatorContainer");
    clearChildren(calculatorContainer);
    calculatorContainer.appendChild(calculator.renderCalculator())
}