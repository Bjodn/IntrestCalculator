import {elementById} from "../view/DomUtilities.js";

let rate = 0;
let sum = 0;
let years = 0;
let appendingValue = 0;

export async function calculateInterest() {
    console.log("Calculate intrest..");

    rate = elementById("RateId").value;
    sum = elementById("SumId").value;
    years = elementById("YearsId").value;
    appendingValue = elementById("Appending valueId").value;

    let newSum = sum;

    const yearlySum = [newSum];


    for (let i = 1; i < Number(years) + 1; i++) {

        newSum = Number(newSum) + Number(appendingValue);
        newSum = newSum * ((rate / 100) + 1);

        yearlySum.push(newSum);

    }

    return yearlySum;
}