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

  withOnClick(method) {
    this.element.onclick = method;
    return this;
  }

  build() {
    return this.element;
  }

}
