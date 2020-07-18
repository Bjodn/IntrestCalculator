import {Calculator} from "./view/Calculator.js";
import {CalculatorSwitch} from "./view/CalculatorSwitch.js";
import {interestCalculation} from "./services/Calculations.js";
import {colorPalette} from "./view/style/ColorPalette.js";
import {CalculatorContainer} from "./view/CalculatorContainer.js";

const calculators = [
    {
        name: "Interest",
        class: new Calculator(interestCalculation)
    },
    {
        name: "Down payment",
        class: new Calculator(interestCalculation)
    }
];

const app = document.getElementsByTagName("Body")[0];
app.style.backgroundColor = colorPalette.backgroundColor;

const calculatorContainer = new CalculatorContainer();
const calculatorSwitch = new CalculatorSwitch(calculators);
calculatorSwitch.setCalculatorContainer(calculatorContainer);

app.appendChild(calculatorSwitch.domElement);
app.appendChild(calculatorContainer.domElement);