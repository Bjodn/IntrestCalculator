
const InterestsEnum = Object.freeze({
    RATE: "Rate",
    SUM: "Sum",
    YEARS: "Years",
    APPENDING: "Appending value",
    ANNUAL: "Annual",
    APPENDED: "Appended",
    PROFIT: "Profit"
});

export function calculateInterest(input) {
    const rate = Number(input[InterestsEnum.RATE]);
    const originalSum = Number(input[InterestsEnum.SUM]);
    const annual = Number(input[InterestsEnum.ANNUAL]);
    const appendingValue = Number(input[InterestsEnum.APPENDING]);

    let sum = originalSum;
    let appended = 0;

    const everyCalculatedInterest = [];

    for (let i = 0; i < annual; i++) {
        const annual = i + 1;
        sum = addAppendingValue(sum, appendingValue);
        sum = addInterest(sum, rate);
        appended += appendingValue;
        const profit = calculateProfit(sum, originalSum, appended);
        everyCalculatedInterest.push(new CalculatedInterest(annual, sum, appended, profit));
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
    constructor(annual, sum, appended, profit) {
        this[InterestsEnum.ANNUAL] = annual;
        this[InterestsEnum.SUM] = sum;
        this[InterestsEnum.APPENDED] = appended;
        this[InterestsEnum.PROFIT] = profit;
    }
}
