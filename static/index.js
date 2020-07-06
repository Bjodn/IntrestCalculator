import {DomElement, elementById} from "./view/DomUtilities.js";
import {Calculator} from "./view/Calculator.js";
import {renderCalculatorSwitch} from "./view/CalculatorSwitch.js";
import {interestCalculation} from "./services/Calculations.js";
import {colorPalette} from "./view/style/ColorPalette.js";


const app = document.getElementsByTagName("Body")[0];
app.style.backgroundColor = colorPalette.backgroundColor;

const calculators = assembleCalculators();
const switchElement = renderCalculatorSwitch(calculators);
app.appendChild(switchElement);

const calculatorContainer = new DomElement("div")
                                .withId("CalculatorContainer")
                                .withStyle({margin: "0 auto", width: "50%"})
                                .build();
app.appendChild(calculatorContainer);

function assembleCalculators() {
    return [
        {
            name: "Interest",
            class: new Calculator(interestCalculation)
        },
        {
            name: "Down payment",
            class: new Calculator(interestCalculation)
        }
    ];
}