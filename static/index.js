import {DomElement} from "./view/DomUtilities.js";
import {Calculator} from "./view/Calculator.js";
import {CalculatorSwitch} from "./view/CalculatorSwitch.js";
import {interestCalculation} from "./services/Calculations.js";
import {colorPalette} from "./view/style/ColorPalette.js";

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

const calculatorSwitch = new CalculatorSwitch(calculators);
app.appendChild(calculatorSwitch.domElement);

const calculatorContainer = new DomElement("div")
                                .withId("CalculatorContainer")
                                .withResponsiveStyle(setCalculatorStyle)
                                .build();
app.appendChild(calculatorContainer);


function setCalculatorStyle() {
    const style = {
        margin: "0 auto",
        width: "50%"
    };
    if (window.matchMedia("(max-width: 700px)").matches) {
        style.width = "100%";
        console.log("min 700");
    }
    return style;
}