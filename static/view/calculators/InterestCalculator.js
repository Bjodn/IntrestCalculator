import {Calculator} from "./Calculator.js";
import {calculateInterest} from "../../services/Calculations.js";
import {InterestsEnum} from "../../enums/InterestCalculatorEnums.js";
import {appendedCellStyle, sumCellStyle, cellStyle, profitCellStyle, annualCellStyle} from "../style/TableStyle.js";
import {mergeStyles} from "../DomUtilities.js";

class InterestCalculator extends Calculator {

    name = "Interest";
    inputTypes = [InterestsEnum.RATE, InterestsEnum.SUM, InterestsEnum.YEARS, InterestsEnum.APPENDING];
    calculation = calculateInterest;

    constructor() {
        super();
        this.renderCalculator();
    }

    tableOutputStyleAdjustment(outputType) {
        let style = {...cellStyle};
        switch (outputType) {
            case InterestsEnum.PROFIT:
                style = mergeStyles(style, profitCellStyle);
                break;
            case InterestsEnum.APPENDED:
                style = mergeStyles(style, appendedCellStyle);
                break;
            case InterestsEnum.SUM:
                style = mergeStyles(style, sumCellStyle);
                break;
            case InterestsEnum.ANNUAL:
                style = mergeStyles(style, annualCellStyle);
                break;
        }
        return style;
    }
}


export const interestCalculator = Object.freeze(new InterestCalculator());