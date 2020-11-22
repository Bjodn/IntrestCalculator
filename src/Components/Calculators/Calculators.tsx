import React, {RefObject} from 'react';
import {calculateInterest} from "../../static/services/Calculations";
import {CalculatorInput, CalculatorInputForm} from "./CalculatorInput";

//type CalculatorFunction = () => JSX.Element;

export interface Calculator  {
    name: string;
    form: JSX.Element;
}


export const calculators: Array<Calculator> = [
    {
        name: "Intrest",
        form: IntrestCalculator("Intrest"),
    },
    {
        name: "Down payment",
        form: DownPaymentCalculator("Down payment")
    }
];

function IntrestCalculator(name: string) {

    // TODO hent fra state?

    return Calculator(
        name,
        calculateInterest,
        [
        {
            name: "Rate",
            ref: React.createRef()
        },
        {
            name: "Sum",
            ref: React.createRef()
        },
        {
            name: "Annual",
            ref: React.createRef()
        },
        {
            name: "Appending value",
            ref: React.createRef()
        }
    ]);
}

function DownPaymentCalculator(name: string) {
    return Calculator(name,
        () => {},
        [
            {
                name: "Rate",
                ref: React.createRef()
            },
            {
                name: "Annual",
                ref: React.createRef()
            }
        ]
        )
}

function Calculator(name: string,
                    calculation: any,
                    inputs: Array<CalculatorInput>) {
    const ouputTableRef: RefObject<HTMLTableElement> = React.createRef();
    return (
        <div>
            <h2>{name}</h2>
            <CalculatorInputForm
                inputs={inputs}
                calculation={calculation}
                outputRef={ouputTableRef}
            />
            <div ref={ouputTableRef} />
        </div>
    )
}
