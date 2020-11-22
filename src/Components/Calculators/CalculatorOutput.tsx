import React from 'react';

export function OutputTable(result: Array<Object>) {
    const headerNames = Object.keys(result[0]);
    return (
        <table>
            <p>tester css</p>
            <tr>
                {headerNames.map(headerName => (<th>{headerName}</th>))}
            </tr>
            {
                result.map(row => (
                    <tr>
                        {Object.values(row).map(output => (<td>{shortenDecimal(output)}</td>))}
                    </tr>)
                )
            }
        </table>
    );
}

function shortenDecimal(outputNumber: number) {
    return outputNumber.toFixed(2);
}
