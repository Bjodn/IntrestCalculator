import {DomElement, mergeStyles} from "./DomUtilities.js";
import {headerCellStyle} from "./style/TableStyle.js";

export class CalculatorOutput {

    constructor() {
        this.domElement = new DomElement("div").build()
    }

    renderOutput(output, getCellStyle) {
        const rows = [];
        rows.push(createTableHeader(Object.keys(output[0]), getCellStyle));
        rows.push(...createTableRows(output, getCellStyle));

        const table = new DomElement("table")
            .withChildren(rows)
            .withStyle({width: "100%", "margin-top": "2.5em"})
            .build();
        table.cellSpacing = 0;
        this.domElement.appendChild(table);
    }

}

function createTableHeader(headerCells, getCellStyle) {
    return new DomElement("tr").withChildren(createHeaderCells(headerCells, getCellStyle)).build()
}

function createTableRows(output, getCellStyle) {
    return output.map(annualOutput => new DomElement("tr")
                                        .withChildren(createTableCells(annualOutput, getCellStyle))
                                        .build());
}

function createHeaderCells(cells, getCellStyle) {
    return cells.map(cell => new DomElement("td")
                                .withInnerHtml(cell)
                                .withResponsiveStyle(mergeCellStyleWithHeaderStyleResponsively(cell, getCellStyle))
                                .build());
}

function createTableCells(annualOutput, getCellStyle) {
    const cells = [];
    for (const [outputType, output] of Object.entries(annualOutput)) {
        let nt = new Intl.NumberFormat();
        const formattedOutput = nt.format(output);
        cells.push(new DomElement("td")
                    .withInnerHtml(formattedOutput)
                    .withResponsiveStyle(getCellStyle(outputType))
                    .build());
    }
    return cells;
}

function mergeCellStyleWithHeaderStyleResponsively(cellType, getCellStyle) {
    return () => {
        const responsiveStyle = getCellStyle(cellType);
        return mergeStyles(responsiveStyle(), headerCellStyle);
    };
}