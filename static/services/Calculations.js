
export const interestCalculation = {
    inputTypes: ["Rate", "Sum", "Years", "Appending value"],
    calculationMethod: calculateInterest
};

function calculateInterest(input) {
    const rate = input["Rate"];
    const originalSum = input["Sum"];
    const years = input["Years"];
    const appendingValue = input["Appending value"];
    let sum = originalSum;

    const result = [];

    for (let i = 0; i < Number(years); i++) {
        sum = addAppendingValue(sum, appendingValue);
        sum = addInterest(sum, rate);
        result.push({
            "Sum": sum,
            "Appended": appendingValue * i,
            "Profit": sum - originalSum - (appendingValue * i)
        });
    }

    return result;
}

function addAppendingValue(sum, appendingValue) {
    return Number(sum) + Number(appendingValue);
}

function addInterest(sum, rate) {
    return sum * ((rate / 100) + 1);
}