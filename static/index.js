import {CalculatorSwitch} from "./view/CalculatorSwitch.js";
import {colorPalette} from "./view/style/ColorPalette.js";
import {CalculatorContainer} from "./view/CalculatorContainer.js";
import {interestCalculator} from "./view/calculators/InterestCalculator.js";
import {downPaymentCalculator} from "./view/calculators/DownPaymentCalculator.js";
import {adjustStylingOfElement} from "./view/DomUtilities.js";

if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/SW.js')
        .then(reg => console.log('service worker registered', reg))
        .catch(err => console.log('service worker not registered', err));
}

const app = document.getElementsByTagName("Body")[0];
adjustStylingOfElement(app, {
    "background-color": colorPalette.backgroundColor
});

const calculatorContainer = new CalculatorContainer();
const calculatorSwitch = new CalculatorSwitch([interestCalculator, downPaymentCalculator],
                                                calculatorContainer);

app.appendChild(calculatorSwitch.domElement);
app.appendChild(calculatorContainer.domElement);