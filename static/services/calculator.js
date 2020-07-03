export async function calculateInterest(input) {
    console.log("Calculate intrest..");

    let rate = input["Rate"];
    let sum = input["Sum"];
    let years = input["Years"];
    let appendingValue = input["Appending value"];


    const yearlySum = [sum];
    for (let i = 1; i < Number(years) + 1; i++) {
        sum = Number(sum) + Number(appendingValue);
        sum = sum * ((rate / 100) + 1);
        yearlySum.push(sum);
    }

    return yearlySum;
}