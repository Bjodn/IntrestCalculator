import {DomElement, mergeStyles} from "./DomUtilities.js";
import {
    cellStyle,
    profitCellStyle,
    appendedCellStyle,
    headerCellStyle
} from "./style/TableStyle.js";

export class CalculatorOutput {

    constructor() {
        this.domElement = new DomElement("div").build()
    }

    renderOutput(output) {
        const rows = [];
        rows.push(createTableHeader(Object.keys(output[0])));
        rows.push(...createTableRows(output));

        const table = new DomElement("table")
            .withChildren(rows)
            .withStyle({"margin-top": "2.5em"})
            .build();
        table.cellSpacing = 0;
        this.domElement.appendChild(table);
    }

}

function createTableHeader(headerCells) {
    return new DomElement("tr").withChildren(createHeaderCells(headerCells)).build()
}

function createTableRows(output) {
    return output.map(yearlyOutput => new DomElement("tr")
                                        .withChildren(createTableCells(yearlyOutput))
                                        .build());
}

function createHeaderCells(cells) {
    return cells.map(cell => new DomElement("td")
                                .withInnerHtml(cell)
                                .withStyle(adjustHeaderStyleToCellType(cell))
                                .build());
}

function createTableCells(yearlyOutput) {
    const cells = [];
    for (const [outputType, output] of Object.entries(yearlyOutput)) {
        let style = adjustStyleToCellType(outputType);
        let nt = new Intl.NumberFormat();
        const formattedOutput = nt.format(output);
        cells.push(new DomElement("td").withInnerHtml(formattedOutput).withStyle(style).build());
    }
    return cells;
}

function adjustHeaderStyleToCellType(cellType) {
    let style = adjustStyleToCellType(cellType);
    style = mergeStyles(style, headerCellStyle);
    return style;
}

function adjustStyleToCellType(outputType) {
    let style = {...cellStyle};
    if (outputType === "Profit") {
        style = mergeStyles(style, profitCellStyle);
    } else if (outputType === "Appended") {
        style = mergeStyles(style, appendedCellStyle);
    }
    return style;
}