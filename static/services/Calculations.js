class Calculation {
    constructor(inputTypes, calculation) {
        this.inputTypes = inputTypes;
        this.calculationMethod = calculation;
    }
}

export const interestCalculation = new Calculation(
    ["Rate", "Sum", "Years", "Appending value"],
    calculateInterest
);

function calculateInterest(input) {
    const rate = Number(input["Rate"]);
    const originalSum = Number(input["Sum"]);
    const years = Number(input["Years"]);
    const appendingValue = Number(input["Appending value"]);

    let sum = originalSum;
    let appended = 0;

    const everyCalculatedInterest = [];

    for (let i = 0; i < years; i++) {
        sum = addAppendingValue(sum, appendingValue);
        sum = addInterest(sum, rate);
        appended += appendingValue;
        const profit = calculateProfit(sum, originalSum, appended);
        everyCalculatedInterest.push(new CalculatedInterest(sum, appended, profit));
    }

    return everyCalculatedInterest;
}

function addAppendingValue(sum, appendingValue) {
    return sum + appendingValue;
}

function addInterest(sum, rate) {
    return sum * ((rate / 100) + 1);
}

function calculateProfit(sum, originalSum, appended) {
    return sum - originalSum - appended;
}

class CalculatedInterest {
    constructor(sum, appended, profit) {
        this["Sum"] = sum;
        this["Appended"] = appended;
        this["Profit"] = profit;
    }
}

