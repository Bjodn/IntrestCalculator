
export class DomElement {

    constructor (domType) {
        this.element = document.createElement(domType);
    }

    withId(id) {
        this.element.id = id;
        return this;
    }

    withClassName(className) {
        this.element.className = className;
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
        this.element.name = type;
        return this;
    }

    withOnClick(method, elementReaction) {
        if (elementReaction != null) {
            this.element.onclick = () => {
                method();
                elementReaction(this.element);
            }
        } else {
            this.element.onclick = method;
        }
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

    /*
    *  Set style of element every time window is resized.
    *  Receives style setting as a function instead of object that return style object conditioned on window size.
    */
    withResponsiveStyle(styleSettings) {
        const setStyle = () => {
            const styles = styleSettings();
            for (const [style, value] of Object.entries(styles)) {
                this.element.style[style] = value;
            }
        };
        window.addEventListener("resize", setStyle);
        setStyle();
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

export function mergeStyles(target, additionalStyle) {
    return Object.assign(target, additionalStyle)
}

export function adjustStylingOfElement(target, styleSettings) {
    for (const [style, value] of Object.entries(styleSettings)) {
        target.style[style] = value;
    }
}

export function widthOfDomElementIsLessThan(element, width) {
    return element.matchMedia(`(max-width: ${width}px)`).matches
}