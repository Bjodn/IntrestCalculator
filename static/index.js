import {DomElement, elementById} from "./view/DomUtilities.js";
import {Calculator} from "./view/Calculator.js";
import {renderCalculatorSwitch} from "./view/CalculatorSwitch.js";
import {calculateInterest} from "./services/Calculations.js";



const app = elementById("app");

const calculators = assembleCalculators();
const switchElement = renderCalculatorSwitch(calculators);
app.appendChild(switchElement);

const calculatorContainer = new DomElement("div")
                                .withId("CalculatorContainer")
                                .withStyle({"margin": "0 auto", "width": "50%"})
                                .build();
app.appendChild(calculatorContainer);

function assembleCalculators() {
    return [
        {
            name: "Interest",
            class: new Calculator(["Rate", "Sum", "Years", "Appending value"], calculateInterest)
        },
        {
            name: "Down payment",
            class: new Calculator(["Rate", "Sum", "Years"], calculateInterest)
        }
    ];
}