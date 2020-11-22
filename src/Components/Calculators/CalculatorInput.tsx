import React, {RefObject} from 'react';
import ReactDOM from "react-dom";
import {OutputTable} from "./CalculatorOutput";

export interface CalculatorInput {
    name: string
    ref: RefObject<HTMLInputElement>
}

export function CalculatorInputForm(props: any) {
    const inputs: Array<CalculatorInput> = props.inputs;
    const calculation: any = props.calculation;
    return (
        <div>
            {
                inputs.map(input => (
                    <div key={input.name} >
                        <p>{input.name}</p> <input ref={input.ref} />
                    </div>)
                )
            }

            <br/>

            <button
                onClick={() => calculate(inputs, calculation, props.outputRef)}
            >Calculate</button>
        </div>
    )
}


function calculate(inputs: Array<CalculatorInput>,
                   calculation: any,
                   outputRef: RefObject<HTMLTableElement>) {

    const result = calculation(fetchCalculatorInput(inputs));
    if (outputRef.current) {
        ReactDOM.render(OutputTable(result), outputRef.current)
    }
}

interface looseObject {
    [key: string]: any
}
function fetchCalculatorInput(inputs: Array<CalculatorInput>) {
    const calculationInput: looseObject = {};
    inputs.forEach(input => {
        if (input.ref.current) {
            calculationInput[input.name] = input.ref.current.value;
        }
    });
    console.log("Calcualate with ", calculationInput);
    return calculationInput;
}
