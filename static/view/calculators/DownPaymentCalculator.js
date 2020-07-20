import {Calculator} from "./Calculator.js";
import {calculateInterest} from "../../services/Calculations.js";
import {InterestsEnum} from "../../enums/InterestCalculatorEnums.js";
import {annualCellStyle, appendedCellStyle, cellStyle, profitCellStyle, sumCellStyle} from "../style/TableStyle.js";
import {mergeStyles} from "../DomUtilities.js";

//TODO
class DownPaymentCalculator extends Calculator {

    name = "Down Payment";
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

export const downPaymentCalculator = Object.freeze(new DownPaymentCalculator());