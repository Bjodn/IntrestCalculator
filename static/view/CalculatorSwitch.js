import {DomElement, clearChildren, appendChildren} from "./DomUtilities.js";
import {containerStyle, chosenOptionStyle, unchosenOptionStyle} from "./style/SwitchStyle.js";
import {adjustStylingOfElement} from "./DomUtilities.js";

export class CalculatorSwitch {

    constructor(calculators, calculatorContainer) {
        this.setCalculatorContainer(calculatorContainer);

        this.options = calculators.map(calculator => this.createCalculatorOption(calculator));

        this.defaultOption = this.options[0];
        this.chooseAndActivateDefaultOption();

        this.dropdown = new DomElement("Button")
            .withInnerHtml(calculators[0].name)
            .withOnClick(() => {
                clearChildren(this.domElement);
                appendChildren(this.domElement, this.options)
            })
            .withResponsiveStyle(chosenOptionStyle)
            .build();

        this.domElement = new DomElement("div")
            .withId("calculatorSwitch")
            .withChildren([this.dropdown])
            .withResponsiveStyle(containerStyle)
            .build();
    }

    chooseAndActivateDefaultOption() {
        this.defaultOption.click(); // Why not??
    }

    createCalculatorOption(calculator) {
        return new DomElement("Button")
            .withOnClickWithElementReaction(
                () => {
                    chooseCalculator(calculator, this.calculatorContainer);
                    this.closeDropdown(calculator.name);
                },
                chosenOption => this.activateOption(chosenOption)
            )
            .withInnerHtml(calculator.name)
            .withResponsiveStyle(unchosenOptionStyle)
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

    closeDropdown(calculator) {
        clearChildren(this.domElement);
        this.domElement.appendChild(this.dropdown);
        this.dropdown.innerHTML = calculator;
    }
}

function chooseCalculator(calculator, calculatorContainer) {
    console.log(`Choosing calculator ${calculator.name}`);
    clearChildren(calculatorContainer.domElement);
    calculatorContainer.domElement.appendChild(calculator.domElement);
}