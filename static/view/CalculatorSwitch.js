import {DomElement, clearChildren} from "./DomUtilities.js";
import {containerStyle, optionStyle, chosenOptionStyle, unchosenOptionStyle} from "./style/SwitchStyle.js";
import {adjustStylingOfElement} from "./DomUtilities.js";

export class CalculatorSwitch {

    constructor(calculators) {
        this.options = calculators.map(calculator => this.createCalculatorOption(calculator));

        this.domElement = new DomElement("div")
            .withId("calculatorSwitch")
            .withChildren(this.options)
            .withResponsiveStyle(containerStyle)
            .build();
    }

    createCalculatorOption(calculator) {
        return new DomElement("Button")
            .withOnClick(
                () => chooseCalculator(calculator, this.calculatorContainer),
                chosenOption => this.activateOption(chosenOption)
            )
            .withInnerHtml(calculator.name)
            .withResponsiveStyle(optionStyle)
            .build()
    }

    activateOption(chosenOption) {
        //TODO change to onclick event?
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
    calculatorContainer.domElement.appendChild(calculator.domElement);
}