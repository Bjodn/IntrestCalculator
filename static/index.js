import {DomElement, elementById} from "./view/DomUtilities.js";
import {renderInterestCalculator} from "./view/InterestCalulator.js";
import {renderDownpaymentCalculator} from "./view/DownpaymentCalculator.js";
import {renderCalculatorSwitch} from "./view/CalculatorSwitch.js";



const app = elementById("app");

const calculators = assembleCalculators();
const switchElement = renderCalculatorSwitch(calculators);
app.appendChild(switchElement);

const calculatorContainer = new DomElement("div").withId("CalculatorContainer").build();
app.appendChild(calculatorContainer);

function assembleCalculators() {
    return [
        {
            name: "Interest",
            renderMethod: renderInterestCalculator
        },
        {
            name: "Down payment",
            renderMethod: renderDownpaymentCalculator
        }
    ];
}