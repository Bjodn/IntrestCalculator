import {Calculator} from "./Calculator.js";
import {calculateInterest} from "../../services/Calculations.js";
import {InterestsEnum} from "../../enums/InterestCalculatorEnums.js";
import {appendedCellStyle, sumCellStyle, profitCellStyle, annualCellStyle} from "../style/TableStyle.js";

class InterestCalculator extends Calculator {

    constructor() {
        super();
        this.name = "Interest";
        this.inputTypes = [InterestsEnum.RATE, InterestsEnum.SUM, InterestsEnum.YEARS, InterestsEnum.APPENDING];
        this.calculation = calculateInterest;
        this.renderCalculator();
    }

    getCellStyleBaseOnType(outputType) {
        let style;
        switch (outputType) {
            case InterestsEnum.PROFIT:
                style = profitCellStyle;
                break;
            case InterestsEnum.APPENDED:
                style = appendedCellStyle;
                break;
            case InterestsEnum.SUM:
                style = sumCellStyle;
                break;
            case InterestsEnum.ANNUAL:
                style = annualCellStyle;
                break;
        }
        return style;
    }
}


export const interestCalculator = Object.freeze(new InterestCalculator());