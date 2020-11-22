import React from 'react';
import ReactDOM from 'react-dom';
import {containerId} from "../CalculatorContainer/CalculatorContainer";
import {Calculator, calculators} from "../Calculators/Calculators";


export function CalculatorSwitch() {
    const buttons = calculators.map(calculator => createButton(calculator));
    console.log("Rendering buttons");
    return (
        <div>
            <h1>Switch</h1>
            {buttons}
        </div>
    );
}

function createButton(calculator: Calculator) {
    return (
        <button key={calculator.name}
                onClick={() => chooseCalculator(calculator)}>
            {calculator.name}
        </button>
    )
}

function chooseCalculator(chosen: Calculator): void {
    console.log(`Choose calculator ${chosen.name}`);
    const chosenCalculator = chosen.form;
    ReactDOM.render(chosenCalculator, document.getElementById(containerId))
}