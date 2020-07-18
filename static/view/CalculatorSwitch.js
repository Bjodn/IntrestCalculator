import {DomElement, clearChildren} from "./DomUtilities.js";
import {optionStyle, chosenOptionStyle, unchosenOptionStyle} from "./style/SwitchStyle.js";
import {adjustStylingOfElement} from "./DomUtilities.js";

export class CalculatorSwitch {

    constructor(calculators) {

        this.options = calculators.map(calculator => this.createCalculatorOption(calculator));

        this.domElement = new DomElement("div")
            .withId("calculatorSwitch")
            .withChildren(this.options)
            .withStyle({"margin": "0 auto", "width": "50%", "padding-bottom": "2.5em"})
            .build();
    }

    createCalculatorOption(calculator) {
        return new DomElement("Button")
            .withOnClick(
                () => chooseCalculator(calculator.class, this.calculatorContainer),
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

    /**
     * Reference to calculator container that the switch will add the calculators into.
     */
    setCalculatorContainer(calculatorContainer) {
        this.calculatorContainer = calculatorContainer;
    }
}

function chooseCalculator(calculator, calculatorContainer) {
    clearChildren(calculatorContainer.domElement);
    calculatorContainer.domElement.appendChild(calculator.domElement)
}