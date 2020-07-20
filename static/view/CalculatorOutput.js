import {DomElement, mergeStyles} from "./DomUtilities.js";
import {headerCellStyle} from "./style/TableStyle.js";

export class CalculatorOutput {

    constructor() {
        this.domElement = new DomElement("div").build()
    }

    renderOutput(output, outputStyleAdjustments) {
        const rows = [];
        rows.push(createTableHeader(Object.keys(output[0]), outputStyleAdjustments));
        rows.push(...createTableRows(output, outputStyleAdjustments));

        const table = new DomElement("table")
            .withChildren(rows)
            .withStyle({"margin-top": "2.5em"})
            .build();
        table.cellSpacing = 0;
        this.domElement.appendChild(table);
    }

}

function createTableHeader(headerCells, outputStyleAdjustments) {
    return new DomElement("tr").withChildren(createHeaderCells(headerCells, outputStyleAdjustments)).build()
}

function createTableRows(output, outputStyleAdjustments) {
    return output.map(annualOutput => new DomElement("tr")
                                        .withChildren(createTableCells(annualOutput, outputStyleAdjustments))
                                        .build());
}

function createHeaderCells(cells, outputStyleAdjustments) {
    return cells.map(cell => new DomElement("td")
                                .withInnerHtml(cell)
                                .withStyle(adjustHeaderStyleToCellType(cell, outputStyleAdjustments))
                                .build());
}

function createTableCells(annualOutput, outputStyleAdjustments) {
    const cells = [];
    for (const [outputType, output] of Object.entries(annualOutput)) {
        let style = outputStyleAdjustments(outputType);
        let nt = new Intl.NumberFormat();
        const formattedOutput = nt.format(output);
        cells.push(new DomElement("td").withInnerHtml(formattedOutput).withStyle(style).build());
    }
    return cells;
}

function adjustHeaderStyleToCellType(cellType, outputStyleAdjustments) {
    let style = outputStyleAdjustments(cellType);
    style = mergeStyles(style, headerCellStyle);
    return style;
}