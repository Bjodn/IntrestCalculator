import React from 'react';
import styles from  "./CalculatorOutput.module.scss";

export function OutputTable(result: Array<Object>) {
    const headerNames = Object.keys(result[0]);
    return (
        <table className={styles.CalculatorOutput}>
            <tr>
                {headerNames.map(headerName => (<th>{headerName}</th>))}
            </tr>
            {AnnualReturns(result)}
        </table>
    );
}

function AnnualReturns(result: Array<Object>) {
    return result.map(row => {
        const values: Array<number> = Object.values(row);
        return (<tr>
            {
                values.map(value => (<td>{shortenDecimal(value)}</td>))
            }
        </tr>)}
    )
}

function shortenDecimal(outputNumber: number) {
    return outputNumber.toFixed(2);
}
