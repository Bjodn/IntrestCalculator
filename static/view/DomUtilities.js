
export class DomElement {

    constructor (domType) {
        this.element = document.createElement(domType);
    }

    withId(id) {
        this.element.id = id;
        return this;
    }

    withInnerHtml(html) {
        this.element.innerHTML = html;
        return this;
    }

    withName(name) {
        this.element.name = name;
        return this;
    }

    withType(type) {
        this.element.type = type;
        return this;
    }

    withOnClick(method) {
        this.element.onclick = method;
        return this;
    }

    withChild(child) {
        this.element.appendChild(child);
        return this;
    }

    withChildren(children) {
        children.forEach(child => this.element.appendChild(child));
        return this;
    }

    withStyle(styleSettings) {
        for (const [style, value] of Object.entries(styleSettings)) {
            this.element.style[style] = value;
        }
        return this;
    }

    withValue(value) {
        this.element.value = value;
        return this;
    }

    build() {
        return this.element;
    }

}

export function clearChildren(element) {
    while (element.lastElementChild) {
        element.removeChild(element.lastElementChild);
    }
}

export function elementById(id) {
    return document.getElementById(id);
}

export function elementsByClass(className) {
    return document.getElementsByClassName(className);
}

