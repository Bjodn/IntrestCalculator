import {DomElement} from "./DomUtilities.js";

export function renderDownpaymentCalculator() {
    return new DomElement("h2").withInnerHtml("DownpaymentCalculator").build();
}