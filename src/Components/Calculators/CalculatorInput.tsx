import React, {RefObject} from 'react';
import ReactDOM from "react-dom";
import {OutputTable} from "./CalculatorOutput";
import styles from  "./CalculatorInput.module.scss";

export interface CalculatorInput {
    name: string
    ref: RefObject<HTMLInputElement>
}

export function CalculatorInputForm(props: any) {
    const inputs: Array<CalculatorInput> = props.inputs;
    const calculation: any = props.calculation;
    return (
        <div className={styles.CalculatorInput} >
            <ul>
            {
                inputs.map(input => (<li>
                    <div className={styles.formName}>
                        <p>{input.name}</p>
                    </div>
                    <input className={styles.formInput} ref={input.ref} />
                </li> ))
            }
            </ul>
            <button onClick={() => calculate(inputs, calculation, props.outputRef)}>
                Calculate
            </button>
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
