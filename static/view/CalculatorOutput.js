import {DomElement} from "./DomUtilities.js";

export class CalculatorOutput {

    constructor(outputTypes) {
        this.outputTypes = outputTypes;
        this.domElement = new DomElement("div")
                        .withStyle({"flex": "1"})
                        .build()
    }

    renderOutput(output) {
        const rows = [];
        rows.push(createTableHeader(["Sum", "Appended", "Profit"]));
        rows.push(...createTableRows(output));

        const table = new DomElement("table").withChildren(rows).build();
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
    return cells.map(cell => new DomElement("td").withInnerHtml(cell).withStyle({}).build());
}
function createTableCells(yearlyOutput) {
    const cells = [];
    for (const [outputType, output] of Object.entries(yearlyOutput)) {
        let style = {};
        if (outputType === "profit") {
            style = {"color": "green"};
        }
        cells.push(new DomElement("td").withInnerHtml(output).withStyle(style).build());
    }
    return cells;
}