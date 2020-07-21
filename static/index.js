import {CalculatorSwitch} from "./view/CalculatorSwitch.js";
import {colorPalette} from "./view/style/ColorPalette.js";
import {CalculatorContainer} from "./view/CalculatorContainer.js";
import {interestCalculator} from "./view/calculators/InterestCalculator.js";
import {downPaymentCalculator} from "./view/calculators/DownPaymentCalculator.js";
import {adjustStylingOfElement} from "./view/DomUtilities.js";

const app = document.getElementsByTagName("Body")[0];
adjustStylingOfElement(app, {
    "background-color": colorPalette.backgroundColor
});

const calculatorContainer = new CalculatorContainer();
const calculatorSwitch = new CalculatorSwitch([interestCalculator, downPaymentCalculator]);
calculatorSwitch.setCalculatorContainer(calculatorContainer);

app.appendChild(calculatorSwitch.domElement);
app.appendChild(calculatorContainer.domElement);